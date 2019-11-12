## Redmine plugin: External links in new window *for Markdown*

*This fork is work with markdown only!*

### About

Make external & attachment links open in new browser windows.
Redmine's own links are still opened in the same (application) window.

(The original version, from which this one was forked off, opened new windows for Redmine's own site-local links, too.)

No configuration, no DB dependency.

### Compatibility

Tested with Redmine 2.3.1. and Redmine 4.0.3.

(The original one was also tested with Redmine 0.9.6, 1.0.5, 2.1.0, but this one changed a few things, so there may be problems on those old versions.)

Note: this one is also incompatible with the original plugin: if both are installed, only one will work. 
(But they will not crash, as I changed the relevant identifiers to avoid collisions.)

### Installation

Download the sources and put them into your Redmine `plugins` folder.

    $ cd {REDMINE_ROOT}
    $ git clone git://github.com/lunakid/external_links_in_new_window.git plugins/external_links_in_new_window

Restart Redmine and have a fun!

### Changelog:

#### This fork:

* Only external & attachment links will open in new windows.

#### Changes in the old, original versions:
#### 0.0.3

* Made compatible with Redmine 2.1.0 and above - thanks to @logical-and.

#### 0.0.2

* Links with external class also will be opened in new window - thanks to Florian Berninger.

#### 0.0.1

* First public release.
