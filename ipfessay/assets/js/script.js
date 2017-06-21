"use strict";

(function() {

    var IPFessay = {

        initialize : function() {

            this.simplemde = new SimpleMDE({
                autofocus: true,
                element: document.querySelector('#text-input'),
                toolbar: [
                    "bold", "italic", "heading", "|",
                    "quote", "unordered-list", "ordered-list", "|",
                    "link", "image", "table", "code", "|",
                    "preview", "side-by-side", "fullscreen", "|",
                    "guide"
                ],
            });

            document.addEventListener('keyup', (event) => {

                if(!this.overlayLoading && event.keyCode == 27)
                    this.closeOverlay();
            });

            document.querySelector('#overlay button').addEventListener('click', () => {

                this.closeOverlay();
            });

            document.querySelector('.button-publish').addEventListener('click', () => {

                this.openOverlay();

                // Render the Markdown essay and post it to the IPFS daemon.
                var f = new FormData();

                this.simplemde.codemirror.save();

                var md = document.querySelector('#text-input').value;
                var renderedPage = this.renderPage(md);

                f.append("path", new Blob([ renderedPage ], {type: "text/html"}), "path");

                var req = new XMLHttpRequest();
                req.addEventListener("load", this.publishCallback);
                req.addEventListener("error", (error) => {

                    this.closeOverlay();

                    setTimeout(() => {

                        alert('Error, try again.');

                    }, 1000);
                });
                req.open("post", window.location.protocol + "//" + window.location.hostname + ":5001/api/v0/add?stream-channels=true");
                req.send(f);        
            });
        },

        openOverlay : function() {

            document.body.className = 'noscroll';

            document.querySelector('#overlay').style.display = 'block';
            document.querySelector('#overlay .loading').style.display = 'block';
            document.querySelector('#overlay section').style.display = 'none';

            this.overlayLoading = true;
        },

        closeOverlay : function() {

            document.body.className = '';
            
            document.querySelector('#overlay').style.display = 'none';
            document.querySelector('#overlay section').style.display = 'none';
        },

        showLink : function(url) {

            this.overlayLoading = false;

            document.querySelector('#overlay .loading').style.display = 'none';
            document.querySelector('#overlay section').style.display = 'block';

            document.querySelector('#overlay a').href = url;
            document.querySelector('#overlay a').innerText = url;
        },

        publishCallback: function() {

            var url = "/ipfs/" + JSON.parse(this.responseText).Hash;

            this.showLink(url);
        },

        renderPage: function(md) {

            return  '<html>' +
                    '<head>' +
                    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
                    '<link rel="stylesheet" href="/ipfs/QmQ5j5PD8yroiMjCPLmVuAQC8JWAnBAfbZnThnV36Zs397">' +
                    '<style>' +
                    'footer {padding: 3em 0; text-align: center; font-size: 1.4em; border-top: 1px solid #e1e1e1;}' +
                    'a:hover { color: #222; border-bottom-color: #555}' +
                    'a { color: #aeaeae; border-bottom: 1px dotted #aeaeae; text-decoration: none; }' +
                    '</style>' + 
                    '</head>' +
                    '<body>' +
                    '<article class="typesettings golden">' +
                    this.simplemde.markdown(md) +
                    '</article>' +
                    '<footer><a href="/ipns/QmSWnBwMKZ28tcgMFdihD8XS7p6QzdRSGf71cCybaETSsU">Publish your own essay with IPFessay</a>' +
                       ' | <a href="https://gitlab.com/stavros/IPFessay">Gitlab</a></footer>' +
                    '</body>' +
                    '</html>';
        }
    };

    window.IPFessay = IPFessay;
})();

window.addEventListener('DOMContentLoaded', () => { IPFessay.initialize(); });
