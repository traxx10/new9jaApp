export const DEV = 1;
export const BASE_URL = DEV
  ? 'http://opnatukstg.ap-south-1.elasticbeanstalk.com/'
  : 'http://opnatukapi.ap-south-1.elasticbeanstalk.com/';

export const TRENDS_USER_ID = 18;
export const GET_AREA_USER_COUNT = BASE_URL + 'area/getAreaWiseAPIUserCount';
export const GET_FINANCIAL_STATUS = BASE_URL + 'user/getFinancialStatusList';
export const CREATE_USER_BY_VOLUNTEER =
  BASE_URL + '/user/createUserByVolunteer';
export const GET_VOLUNTEER_SURVEY_LIST = BASE_URL + 'survey/getPollSurveyList';
export const SEND_OTP = BASE_URL + 'user/sendMobileOtp';
export const VALIDATE_OTP = BASE_URL + 'user/validateMobileOtp';
export const EMAIL_REGISTRATION = BASE_URL + 'user/sendEmailRegistrationLink';
export const FACEBOOK_REGISTRATION = BASE_URL + 'user/userRegistratoionByFB';

export const UPDATE_USER = BASE_URL + 'user/updateUserDetails';
export const FORGET_PASSWORD = BASE_URL + 'user/forgetPassword';

export const GET_USER_DETAILS_EMAIL = BASE_URL + 'user/getUserDetails';

export const LANDING_RESOURCES =
  BASE_URL + 'landing/getFirPolResourceAndHeatMapDtl';
export const LANDING_TOP_SIX = BASE_URL + 'landing/getTopSixResources';
export const LANDING_CDM = BASE_URL + 'landing/getTopThreeCDM';
export const LANDING_PDM = BASE_URL + 'landing/getTopThreePDM';

export const AREA_PDM = BASE_URL + 'area/getAreaByLocationPolDist';
export const AREA_CDM = BASE_URL + 'area/getAreaByLocationFirDist';
export const GPR_FLAG = BASE_URL + 'gpr/markGPRFlag';
export const TREND_ = BASE_URL + 'trends/getResourceGprHistoryDetails';
export const TREND_IMAGE = BASE_URL + 'trends/getTrendsImagesDetails';
export const TREND_PDM = BASE_URL + 'trends/getPDMResourceGprHistoryDetails';
export const TREND_CDM = BASE_URL + 'trends/getCDMResourceGprHistoryDetails';
export const GET_TRENDS_API_SEQUENCE = BASE_URL + 'area/getApprovalAPIsName';
export const GET_TRENDS_DETAIL = BASE_URL + 'area/getResGprApprData';
export const GET_TRENDS_DETAIL_C = BASE_URL + 'area/getResCatSurveyApprData';

export const GET_CURRENT_ACTIVE_SURVEY =
  BASE_URL + 'survey/getCurrActiveRegnSurvey';
export const SUBMIT_USER_SURVEY_QUESTION =
  BASE_URL + 'survey/postSurveyAnswers';
export const GET_SURVEY_BY_ID = BASE_URL + 'survey/getSurveyById';
export const UPDATE_USER_AREA = BASE_URL + 'user/insertBaseAreaDetails';
export const REPORT_RESOURCE_PROFILE = BASE_URL + 'area/reportResourceProfile';
export const GET_RATE_NOW_RESOURCES = BASE_URL + 'area/getRatingResource';
export const UPLOAD_MEDIA = BASE_URL + 'message/mediaMessageCompose';
export const GET_UPLOADED_MEDIA = BASE_URL + 'message/getMediaMessageContent';
export const GET_AWS_MEDIA_CONTENT = BASE_URL + 'public/getAwsContent/umg';
export const MOBILE_NUMBER_ = '919729483089'; //put 1 -- api will work
export const GET_RESOURCE_PROFILE = BASE_URL + '/area/searchResourceProfile';
export const TIMELINE_DATA = BASE_URL + 'message/getUserTimeLine';
export const LIKDISLIKE_POST = BASE_URL + 'message/messageLikeDislike';
export const REPORT_POST = BASE_URL + 'message/reportMessage';
export const GET_RESOURCE_BG_BLUE_TICK = BASE_URL + 'area/getResourceBGTicks';
// export const REPORT_POST = BASE_URL  + "Report_Abuse.php"; //Do not have the api
export const GET_WEBSITE_PAYMENT_LINK = BASE_URL + 'order/sendPaymentLinkMail';
export const FETCH_REPLY_POST = BASE_URL + 'message/getMessageByThreadId';
export const MESSAGE_COMPOSE = BASE_URL + 'message/messageCompose';
export const MEDIA_COMPOSE = BASE_URL + 'mediaCompose'; //Do not have the api
export const MESSAGE_REPLY = BASE_URL + 'message/messageReply';
export const MEDIA_MESSAGE_REPLY =
  'http://holygrailwar.babbles.zone/' + 'mediaMessageReply'; //Do not have the api
export const GET_USER_NOTIFICATIONS =
  BASE_URL + 'notification/getUserNotification';
export const UPDATE_USER_NOTIFICATIONS =
  BASE_URL + 'notification/updateUserNotificationStatus';
export const PM_CABINETS = BASE_URL + '/public/getPMCabinates';
export const CM_CABINETS = BASE_URL + '/area/getCMCabinates';
export const CM_PM_PROFILE = BASE_URL + '/area/getCMPMProfile';
export const MESSAGE_DELETE = BASE_URL + '/message/deleteMessage';
export const MESSAGE_EDIT = BASE_URL + '/message/editMessage';
// http://localhost/customMapAPIs/message/messageCompose
export const GET_LANGUAGE = BASE_URL + '/public/getLanguageFields';
export const GET_INTRO_IMAGES = BASE_URL + '/public/getIntroImagesDetails';
export const GET_TIMELINE_LOCAL = BASE_URL + '/message/getResourceTimeLine';
export const GET_RESOURCE_BY_ID = BASE_URL + '/area/getResourceById';
export const UPDATE_LEADER_COVER_PIC = BASE_URL + '/area/uploadResCoverPic';
export const GET_LANGUAGE_SELECTION_LIST =
  BASE_URL + '/public/getAvailLanguageList';
export const TWITTER_BLUE_TICK = 'https://api.twitter.com/1.1/users/show.json';
export const GET_RESOURCE_URI = BASE_URL + '/public/getResourceFormUrl';
export const GET_LOCATION_BY_COORDS = BASE_URL + '/area/getLocationByCoords';
export const SOCIAL_MEDIA_LOGIN = BASE_URL + '/user/createUserWithSocial';
export const CONNECT_WITH_MEDIA = BASE_URL + 'user/ConnectUserWithSocial';
export const USERNAME_SUGGESTION = BASE_URL + '/user/userNameSuggestion';
export const USERNAME_VALIDATION = BASE_URL + '/user/userNameValidation';
export const UPDATE_USER_LOCATION = BASE_URL + '/area/updateUserLocation'; // 'user/getUserDetails';
export const SEARCH_AREA = BASE_URL + 'area/searchAreaByLikeName';
export const SEARCH_LEADER = BASE_URL + 'area/searchResourceByLikeName';
export const GET_ALL_CONSTITUENCY = BASE_URL + 'area/getAllConstituencyList';
export const GET_ALL_STATE_CODES = BASE_URL + 'area/getAllStateCodes';
export const CREATE_POLL = BASE_URL + 'poll/createPoll';
export const GET_POLL_BY_ID = BASE_URL + 'poll/getPollById';
export const GET_USER_POLLS = BASE_URL + 'poll/getPollCreatedByUser';
export const SAVE_USER_POLL_RESPONSE = BASE_URL + 'poll/savePollResponse';
export const SEND_OTP_TO_CONNECT_MOBILE =
  BASE_URL + 'user/sendMobileOtpWoCreation';
export const MARK_ALL_NOTIFICATIONS_READ =
  BASE_URL + 'notification/markNotificationAsRead';
export const SAVE_RESOURCE_ATTRIBUTE = BASE_URL + 'area/saveResourceAttributes';
export const GET_USER_POST = BASE_URL + 'message/getUserMessages';
export const APP_NAME = 'Rajneeti';
export const GET_USER_SCRATCH = BASE_URL + 'scratchCard/getUserScratchCard';
export const GET_REPORT_REASONS = BASE_URL + 'message/getReasonActionList';
export const REPORT_TIMELINE_POST = BASE_URL + 'message/reportMessage';
export const GET_ALL_FAQ = BASE_URL + '/public/getFaqList/all';
export const GET_FOLLOW_UN_FOLLOW_COUNT = `${BASE_URL}/user/getFollowingOrFollowersCount`;
export const GET_FOLLOW_UN_FOLLOW_LIST = `${BASE_URL}/user/getUserFollowingOrFollowers`;
export const FOLLOW_USER = `${BASE_URL}/user/saveUserFollowing`;
export const UN_FOLLOW_USER = `${BASE_URL}/user/deleteUserFollowing`;
export const GET_USER_PROFILE_DETAILS = `${BASE_URL}/user/getUserDetails`;
export const SEND_DM = `${BASE_URL}/dm/sendDm`;
export const GET_UNREAD_DM = `${BASE_URL}/dm/getUnreadDm`;
export const GET_ALL_DM = `${BASE_URL}/dm/getAllDm`;
export const MARK_DM_AS_READ = `${BASE_URL}/dm/markDmAsRead`;
export const GET_DM_CONVERSATION = `${BASE_URL}dm/getDMConversation`;
export const GET_NOTIFICATION_DM_LIST = `${BASE_URL}/notification/getUserDmNotification`;
export const GET_DM_MAIN_LIST = `${BASE_URL}dm/getDmMainList`;
export const WS_API =
  'ws://Raajneetiapis2-env.eba-52txmuph.ap-south-1.elasticbeanstalk.com:8080/socketHandler';
export const GET_POST_LIKES = `${BASE_URL}/message/getMessageLikingList`;
