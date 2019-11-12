require 'redmine'

require_dependency 'external_links_in_new_window_for_markdown/view_layouts_base_html_head_hook'

Redmine::Plugin.register :external_links_in_new_window_for_markdown do
  name 'External Links In New Window'
  author 'akzhan.abdulin@gmail.com, lunakid@gmail.com'
  description 'Open external & attachment links in new browser windows.'
  version '0.9'
  url 'https://github.com/lunakid/external_links_in_new_window'
  author_url 'http://github.com/lunakid'
end

