function learndash_scroll_to_parent(e){if(""!=e&&jQuery(e).length){var r=jQuery(e).offset().top,a=jQuery(window).scrollTop();r<a&&jQuery("html,body").animate({scrollTop:r},750)}}jQuery(document).ready(function(){if(jQuery(".ld_course_info .ld_course_info_mycourses_list .ld-course-registered-pager-container a").length){function e(e){e.preventDefault();var r=jQuery(e.currentTarget).data("paged"),a=jQuery(e.currentTarget).parents(".ld_course_info");if(void 0!==a){var t=jQuery(a).data("shortcode-atts");if(void 0!==a){var n={action:"ld_course_registered_pager",paged:r,shortcode_atts:t};jQuery.ajax({type:"POST",url:sfwd_data.ajaxurl,dataType:"json",cache:!1,data:n,error:function(e,r,a){},success:function(e){void 0!==e&&(void 0!==e.content&&jQuery(".ld_course_info_mycourses_list .ld-courseregistered-content-container",a).html(e.content),void 0!==e.pager&&(jQuery(".ld_course_info_mycourses_list .ld-course-registered-pager-container",a).html(e.pager),learndash_scroll_to_parent(jQuery(".ld_course_info_mycourses_list",a)),jQuery(window).trigger("learndash_pager_content_changed",{parent_div:a})))}})}}}jQuery(".ld_course_info .ld_course_info_mycourses_list").on("click",".ld-course-registered-pager-container a",e)}}),jQuery(document).ready(function(){if(jQuery(".ld_course_info .course_progress_details .ld-course-progress-pager-container a").length){function e(e){e.preventDefault();var r=jQuery(e.currentTarget).data("paged"),a=jQuery(e.currentTarget).parents(".ld_course_info");if(void 0!==a){var t=jQuery(a).data("shortcode-atts");if(void 0!==a){var n={action:"ld_course_progress_pager",paged:r,shortcode_atts:t};jQuery.ajax({type:"POST",url:sfwd_data.ajaxurl,dataType:"json",cache:!1,data:n,error:function(e,r,a){},success:function(e){void 0!==e&&(void 0!==e.content&&jQuery(".course_progress_details .ld-course-progress-content-container",a).html(e.content),void 0!==e.pager&&(jQuery(".course_progress_details .ld-course-progress-pager-container",a).html(e.pager),learndash_scroll_to_parent(jQuery(".course_progress_details",a)),jQuery(window).trigger("learndash_pager_content_changed",{parent_div:a})))}})}}}jQuery(".ld_course_info .course_progress_details").on("click",".ld-course-progress-pager-container a",e)}}),jQuery(document).ready(function(){if(jQuery(".ld_course_info .ld-quiz-progress-pager-container a").length){function e(e){e.preventDefault();var r=jQuery(e.currentTarget).data("paged"),a=jQuery(e.currentTarget).parents(".ld_course_info");if(void 0!==a){var t=jQuery(a).data("shortcode-atts");if(void 0!==a){var n={action:"ld_quiz_progress_pager",paged:r,shortcode_atts:t};jQuery.ajax({type:"POST",url:sfwd_data.ajaxurl,dataType:"json",cache:!1,data:n,error:function(e,r,a){},success:function(e){void 0!==e&&(void 0!==e.content&&jQuery("#quiz_progress_details .ld-quiz-progress-content-container",a).html(e.content),void 0!==e.pager&&(jQuery("#quiz_progress_details .ld-quiz-progress-pager-container",a).html(e.pager),learndash_scroll_to_parent(jQuery("#quiz_progress_details",a)),jQuery(window).trigger("learndash_pager_content_changed",{parent_div:a})))}})}}}jQuery(".ld_course_info .quiz_progress_details").on("click",".ld-quiz-progress-pager-container a",e)}}),jQuery(document).ready(function(){if(jQuery(".ld-course-list-content .learndash-pager-course_list a").length){function e(e){e.preventDefault();var r=jQuery(e.currentTarget).parents(".ld-course-list-content");if(void 0!==r){var a=jQuery(r).data("shortcode-atts");if(void 0!==a){var t=jQuery(e.currentTarget).data("paged"),n={action:"ld_course_list_shortcode_pager",paged:t,shortcode_atts:a};jQuery.ajax({type:"POST",url:sfwd_data.ajaxurl,dataType:"json",cache:!1,data:n,error:function(e,r,a){},success:function(e){void 0!==e&&void 0!==e.content&&(jQuery(r).html(e.content),learndash_scroll_to_parent(r),jQuery(window).trigger("learndash_pager_content_changed",{parent_div:r}))}})}}}jQuery(".ld-course-list-content").on("click",".learndash-pager-course_list a",e)}}),jQuery(document).ready(function(){if(jQuery(".widget_ldcoursenavigation .learndash-pager-course_navigation_widget a").length){function e(e){e.preventDefault();var r=jQuery(e.currentTarget).parents(".course_navigation");if(void 0!==r){var a=jQuery(r).data("widget_instance");if(void 0!==a){var t=jQuery(e.currentTarget).data("paged"),n={action:"ld_course_navigation_pager",paged:t,widget_data:a};jQuery.ajax({type:"POST",url:sfwd_data.ajaxurl,dataType:"json",cache:!1,data:n,error:function(e,r,a){},success:function(e){void 0!==e&&void 0!==e.content&&e.content.length&&(jQuery(r).html(e.content),learndash_scroll_to_parent(r),jQuery(window).trigger("learndash_pager_content_changed",{parent_div:r}))}})}}}jQuery(".widget_ldcoursenavigation").on("click",".learndash-pager-course_navigation_widget a",e)}}),jQuery(document).ready(function(){if(jQuery("#learndash_course_navigation_admin_meta .course_navigation .learndash-pager a").length){function e(e){e.preventDefault();var r=jQuery(e.currentTarget).parents(".course_navigation");if(void 0!==r){var a=jQuery(r).data("widget_instance");if(void 0!==a){var t=jQuery(e.currentTarget).data("paged"),n={action:"ld_course_navigation_admin_pager",paged:t,widget_data:a};jQuery.ajax({type:"POST",url:sfwd_data.ajaxurl,dataType:"json",cache:!1,data:n,error:function(e,r,a){},success:function(e){void 0!==e&&void 0!==e.content&&e.content.length&&(jQuery(r).html(e.content),learndash_scroll_to_parent(r),jQuery(window).trigger("learndash_pager_content_changed",{parent_div:r}))}})}}}jQuery("#learndash_course_navigation_admin_meta").on("click",".course_navigation .learndash-pager a",e)}}),jQuery(document).ready(function(){if(jQuery("#learndash_admin_quiz_navigation .quiz_navigation .learndash-pager a").length){function e(e){e.preventDefault();var r=jQuery(e.currentTarget).parents(".quiz_navigation");if(void 0!==r){var a=jQuery(r).data("widget_instance");if(void 0!==a){var t=jQuery(e.currentTarget).data("paged"),n={action:"ld_quiz_navigation_admin_pager",paged:t,widget_data:a};jQuery.ajax({type:"POST",url:sfwd_data.ajaxurl,dataType:"json",cache:!1,data:n,error:function(e,r,a){},success:function(e){void 0!==e&&void 0!==e.content&&e.content.length&&(jQuery(r).html(e.content),learndash_scroll_to_parent(r),jQuery(window).trigger("learndash_pager_content_changed",{parent_div:r}))}})}}}jQuery("#learndash_admin_quiz_navigation").on("click",".quiz_navigation .learndash-pager a",e)}});