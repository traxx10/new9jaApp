export enum ActionTypes {
  // App Action
  SAVE_USER_LANG_STRING = 'save_user_lang_string',
  SAVE_APP_LANG_CODES = 'save_app_lang_codes',
  GET_INTRO_IMAGES_SUCC = 'get_intro_images_succ',
  GET_INTRO_IMAGES_FAIL = 'get_intro_images_fail',
  GET_INTRO_IMAGES_START = 'get_intro_images_start',
  SAVE_USER_COLOR = 'save_user_color',
  GET_REASONS_LIST_SUCC = 'get_reasons_list_succ',
  SAVE_NAV_REF = 'save_nav_ref',
  GET_FAQ_START = 'get_faq_start',
  GET_FAQ_SUCC = 'get_faq_succ',
  GET_FAQ_FAIL = 'get_faq_fail',
  TOGGLE_FAQ = 'toggle_faq',
  ON_SCREEN_CHANGE = 'on_screen_change',

  // Top Politician Action
  GET_PM_DATA_START = 'get_pm_data_start',
  GET_CM_DATA_START = 'get_cm_data_start',
  GET_CABINETS_SUCC = 'get_cabinets_succ',
  GET_PM_DATA_SUCC = 'get_pm_data_succ',
  GET_CM_DATA_SUCC = 'get_cm_data_succ',
  GET_PM_DATA_FAIL = 'get_pm_data_fail',
  GET_CM_DATA_FAIL = 'get_cm_data_fail',
  RESET_CABINET_PAGE = 'reset_cabinet_page',
  GET_CABINETS_FAIL = 'get_cabinets_fail',

  // Police Profile Action
  GET_POLICE_START = 'get_police_start',
  GET_POLICE_SUCC = 'get_police_succ',
  GET_POLICE_FAIL = 'get_police_fail',
  GET_BLUE_TICKS_PROFILE = 'get_blue_ticks_profile',
  SAVE_RESOURCE_WALL_POST = 'save_resource_wall_post',

  // Verified Profile Action
  GET_LEADER_RESOURCE_START = 'get_leader_resource_start',
  GET_LEADER_RESOURCE_SUCC = 'get_leader_resource_succ',
  GET_LEADER_RESOURCE_FAIL = 'get_leader_resource_fail',
  GET_LEADER_TIMELINE_START = 'get_leader_timeline_start',
  GET_LEADER_TIMELINE_SUCC = 'get_leader_timeline_succ',
  GET_LEADER_TIMELINE_FAIL = 'get_leader_timeline_fail',
  UPDATE_VERIFIED_DATA = 'update_verified_data',
  ON_ATTRIBUTE_CLICK = 'on_attribute_click',
  GET_POLL_SUCCESS_BLUETICK = 'get_poll_success_bluetick',
  SAVE_POLL_RES_START = 'save_poll_res_start',
  SAVE_POLL_RES_SUCC = 'save_poll_res_succ',
  SAVE_POLL_RES_STOP = 'save_poll_res_stop',
  UPDATE_VERIFIED_NAV_BAR_STATE = 'update_verified_nav_bar_state',
  DELETE_BLUETICK_POST = 'delete_bluetick_post',
  DELETE_GREENTICK_POST = 'delete_greentick_post',

  // SearchAR Action
  GET_RESOURCE_AR_START = 'get_resource_ar_start',
  GET_RESOURCE_AR_SUCC = 'get_resource_ar_succ',
  GET_RESOURCE_AR_STOP = 'get_resource_ar_stop',

  // User Action
  GET_USER_DETAILS = 'get_user_details',
  GET_USER_DETAILS_START = 'get_user_details_start',
  GET_USER_DETAILS_FAIL = 'get_user_details_fail',
  GET_USER_DETAILS_SUCC = 'get_user_details_succ',
  SAVE_USER_DETAILS = 'save_user_details',
  SAVE_USER_ID = 'save_user_id',
  SAVE_USER_CURR_LOCATION = 'save_user_curr_location',
  SAVE_USER_SCRATCH_DETAILS = 'save_user_scratch_details',
  UPDATE_CARD_HEIGHT = 'update_card_height',
  REFRESHING_ADMIN_POLLS_START = 'refreshing_admin_polls_start',
  REFRESHING_ADMIN_POLLS_SUCC = 'refreshing_admin_polls_stop',
  GET_NORMAL_USER_POLL_SUCC = 'get_normal_user_poll_succ',
  GET_NORMAL_USER_POLL_START = 'get_normal_user_poll_start',
  GET_ADMIN_POLL_START = 'get_admin_poll_start',
  REFRESHING_NORMAL_USER_POLLS_START = 'refreshing_normal_user_poll_start',
  REFRESHING_NORMAL_USER_POLLS_SUCC = 'refreshing_normal_user_polls_succ',
  ON_GET_USER_FOLLOW_SUCC = 'on_get_user_follow_succ',
  ON_FOLLOWERS_REFRESH = 'on_followers_refresh',
  ON_FOLLOWING_REFRESH = 'on_following_refresh',

  // Navbar Action
  GET_NAVBAR_CM_PM_SUCC = 'get_navbar_cm_pm_succ',
  GET_NAVBAR_CM_PM_FAIL = 'get_navbar_cm_pm_fail',
  GET_NOTIFICATIONS_SUCC = 'get_notifications_succ',
  GET_NOTIFICATIONS_FAIL = 'get_notifications_fail',
  REFRESH_NOTIFICATIONS = 'refresh_notifications',
  UPDATE_SEARCH_BAR_TEXT = 'update_searcg_bar_text',

  // RECORDING TYPES
  TOGGLE_FLASH = 'toggle_flash',
  TOGGLE_CAMERA = 'toggle_camera',
  ON_FACE_DETECTED = 'on_face_detected',
  START_STOP_RECORDING = 'start_stop_recording',
  VIDEO_CAMERA_DATA = 'video_camera_data',
  EXTENSION_NAME = 'extenstion_name',
  RESET_FILTER_REDUCER = 'reset_filter_reducer',
  RESET_RECORDING_REDUCER = 'reset_recording_reducer',
  SHOW_BAR = 'show_bar',
  UPDATE_CURR_PRGRESS = 'update_curr_progress',

  // FILTER PREVIEW TYPES
  TOGGLE_SELECTED_FILTER_PREVIEW = 'toggle_selected_filter_preview',
  SELECT_FILTER = 'select_filter',

  // LOCATION TYPES
  UPDATE_USER_CURR_LOCATION = 'update_user_curr_location',

  // COMPOSE REDUCER
  SELECT_POST_DATA = 'select_post_data',

  // GREEN TICK TYPES
  GET_POST_START = 'get_start_post',
  GET_POST_SUCCESS = 'get_post_success',
  GET_POST_FAIL = 'get_post_fail',
  LIKE_POST_GREEN = 'like_post_green',
  LIKE_POST_BLUE = 'like_post_blue',

  GET_RESOURCE_DETAIL_SUCC = 'get_resource_detail_succ',

  // SIDEMENU TYPES
  TOGGLE_SIDE_MENU_MODAL = 'toggle_side_menu_modal',

  // VOLUNTEER TYPES
  GET_VOLUNTEER_USER_COUNTS_SUCCESS = 'get_volunteer_user_counts_success',
  ON_VOLUNTEER_DATA_CHANGE = 'on_volunteer_data_change',
  GET_FINANCIAL_STAT_SUCC = 'get_financial_stat_succ',
  GET_ALL_STATES_SUCC = 'get_all_states_succ',
  GET_ALL_CONSTITUENCIES_SUCC = 'get_all_constituencies_succ',
  CREATE_VOLUNTEER_SUCCESS = 'create_volunteer_success',
  GET_VOLUNTEER_SURVEY_LIST_SUCC = 'get_volunteer_survey_list_succ',
  RESET_VOLUNTEER_DETAILS = 'reset_volunteer_details',

  // SURVEY TYPES
  SAVE_SURVEY_ID = 'save_survey_id',
  UPDATE_SURVEY_REDUCER = 'update_survey_reducer',
  GET_SURVEY_SUCCESS = 'get_survey_succ',
  REFRESH_SURVEYS = 'refresh_surveys',
  ON_GET_SURVEYS_START_NATIONAL = 'on_get_surveys_start_national',
  ON_GET_SURVEYS_END_NATIONAL = 'on_get_surveys_end_national',
  ON_GET_SURVEYS_START_STATE = 'on_get_surveys_start_state',
  ON_GET_SURVEYS_END_STATE = 'on_get_surveys_end_state',

  // GREEN TICK DETAIL TYPES
  GET_POST_DETAILS_START = 'get_start_post_details',
  GET_POST_DETAILS_SUCCESS = 'get_post_details_success',
  GET_POST_DETAILS_FAIL = 'get_post_details_fail',
  LIKE_POST_DETAILS_GREEN = 'like_post_details_green',
  LIKE_POST_DETAILS_BLUE = 'like_post_details_blue',

  // REPORT SCREEN ACTION
  REFRESH_TIME_LINE = 'refresh_time_line',
  GET_TIMELINE_SUCC = 'get_timeline_succ',
  ON_TIMELINE_END_START = 'on_timeline_end_start',
  ON_TIMELINE_END_SUCC = 'on_timeline_end_succ',
  ON_TIMELINE_REFRESH_START = 'on_timeline_refresh_start',
  ON_TIMELINE_REFRESH_SUCC = 'on_timeline_refresh_succ',
  TIMELINE_LIST_REF = 'timeline_list_ref',

  // DM SCREEN ACTION
  ON_GET_UNREAD_DM = 'on_get_unread_dm',
  ON_GET_ALL_DM = 'on_get_all_dm',

  // TRENDS ACTION
  ON_GET_API_SEQUENCE_SUCC = 'on_get_api_sequence_succ',
  ON_GET_TRENDS_SECTION_SUCC = 'on_get_trends_section_succ',
  ON_TRENDS_REFRESH_SUCC = 'on_trends_refresh_succ',
  ON_TRENDS_COUNTRY_CHANGE = 'on_trends_country_change',
  ON_TRENDS_SEQUENCE_START = 'on_get_trends_sequence_start',
}

// export type Action = FetchTodosAction | DeleteToDoAction,
