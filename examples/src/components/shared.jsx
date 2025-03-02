export const SANDBOX_SCRIPT = "og-sandbox-script";

export function timeHash() {
    return (+new Date).toString(36).slice(-8);
}

export function composeCodeHtml({examplesUrl = "", head, body, script, id = ""}) {
    return `<!DOCTYPE html>
                <html>
                  <head class="${timeHash()}">
                    <base href="${examplesUrl}/${id}/">
                    ${head}
                  </head>
                  <body style="width: 100%; height: 100%; position: absolute; margin: 0; padding: 0;">
                    ${body}
                    <script type="module" id=${SANDBOX_SCRIPT}>
                      ${script}
                    </script>
                  </body>
                </html>`;
}

export function parseHtml(htmlText) {
    const parser = new DOMParser();
    const el = parser.parseFromString(htmlText, 'text/html');
    if (el.head) {
        let baseEl = el.head.getElementsByTagName('base');
        if (baseEl[0]) {
            el.head.removeChild(baseEl[0]);
        }
    }

    const head = el.head.innerHTML.trim();
    const scriptEl = el.body.querySelector(`#${SANDBOX_SCRIPT}`);
    const script = scriptEl ? scriptEl.innerText.trim() : "";
    if (scriptEl) {
        el.body.removeChild(scriptEl);
    }
    const body = el.body.innerHTML.trim();

    return {head, body, script};
}