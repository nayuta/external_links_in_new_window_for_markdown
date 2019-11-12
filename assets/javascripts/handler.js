(function()
{
        // Get redmine hostname
        var hostname = location.href.replace(/(https?:\/\/[^\/]+)\/.+/, "$1");

        /**
         * Needs to be bound to the DOM object of the relevant A element on call!
         */
        var retarget = function()
        {
                if (!this.href.startsWith(hostname)) {
                        this.classList.add('external');
                        this.target = '_blank';
                }
        };

        if (document.observe)   // Redmine with Prototype?...
        {
                document.observe('dom:loaded', function()
                {
                        var links = $$('div.attachments a, a.external');
                        for (var i = 0; i < links.length; i++)
                        {
                                retarget.call(links[i]);
                        }
                });
        }
        else if (window.jQuery) // Redmine with jQuery?...
        {
                jQuery(document).ready(function()
                {
                        jQuery('div.attachments a, a').each(retarget);
                });
        }
        else // Redmine with alien space technology from the future!... :-o
        {
                console.error('[ExternalLinksInNewWindow] Unknown JS-framework!');
        }
})();
