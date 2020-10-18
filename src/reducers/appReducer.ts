import {ActionTypes} from '../actions';
import {APP_GLOBAL_COLOR} from './../utils/constant';

const defaultLang = [
  'Trends',
  'Survey',
  'Arena',
  'Notifications',
  'Rate Now',
  'Profile',
  'Male',
  'Female',
  'Select Your Profession',
  'Student',
  'Salaried',
  'Entrepreneur',
  'Retired',
  'Housewife',
  'Other',
  'Select Your Age group',
  'Teenager',
  'Twenties',
  'Thirties',
  'Forties',
  'Fifties',
  'Sixty+',
  'Share your views',
  'Arena',
  'Reply',
  'National',
  'County',
  'Survey',
  'Submit',
  'More Survey',
  'Thanks for submitting the survey. Please Press Survey button for more Surveys.',
  'Rate No',
  'Rate Leader',
  'Current Rating',
  'Political Information',
  'Share',
  'Trends',
  'Profile',
  'Give your profile a name',
  'Male',
  'Female',
  'Choose your language',
  'Select Your Profession',
  'Student',
  'Salaried',
  'Entrepreneur',
  'Retired',
  'Housewife',
  'Other',
  'Select Your Age group',
  'Teenager',
  'Twenties',
  'Thirties',
  'Forties',
  'Fifties',
  'Sixty+',
  'Settings',
  'Choose Colour Theme',
  'Choose Home Page',
  'Whats New',
  'PM and Cabinet',
  '',
  'Other Prominent Candidates',
  'Rank',
  'Rating',
  'Search your Leader',
  ' Click here to search your leader by Area/Constituency',
  ' Click here to search your leader by name',
  'Connect with Facebook',
  'Connect with Twitter',
  'Not on Facebook or Twitter?',
  'By signing in you agree to the',
  'Terms & Conditions',
  'Mobile Number Verification',
  'Get OTP',
  'Enter OTP',
  'Resend OTP',
  'Submit',
  'Help us know your area better',
  'Search your County',
  'Are you looking for',
  'Is your location',
  'Are you looking for',
  'You are about to enter',
  'Agree to continue',
  'Agree',
  'Disagree',
  'Create Username',
  'Username',
  'Try one of these',
  'Create your unique identity and voice your opinions about the leaders around you!',
  'Skip',
  'Gender',
  'About Me',
  'Profession',
  'Age',
  'Language',
  'Name',
  'First Name',
  'Last Name',
  'Connect',
  'Type here',
  'Search or choose your constituency',
  'Your Constituency is',
  'Take Survey',
  'Cancel',
  'There are currently no active surveys',
  'Opinatio-Message',
  'Thank You for Rating. Please come back after 24 hours to rate again.',
  'You have already sent a feedback!',
  'View More',
  'View Less',
  'Post',
  'Enter Constituency Name',
  'Enter Leader Name',
  'Okay',
  'Edit',
  'Thank You for your concern. We will get back to in next 24 hours.',
  'Own this Profile',
  'No Results Found',
  'Are you sure you want to delete this?',
  'Search must be a minimum of 5 characters',
  'Please select the Rating',
  'Your Mobile number needs to be verified to rate a leader',
  'Thank you for rating. You can Rate again after 24 hours',
  'Report Sent Successfully',
  'An error occured while uploading image',
  ' please try again!',
  'Thanks for verifying your mobile number',
  'Error getting data from facebook. Try again!',
  'Constituency Found',
  'Use Constituency',
  'Are you looking for',
  'Error: Please select different area',
  'Please enter your county',
  'Please enter a valid number',
  'An error occured while authenticating your account',
  ' please try again later',
  'Your username can only contain alphabets and numbers',
  'Please fill in your username',
  'Thanks for submitting the survey. Please press the survey button for more',
  'Thanks for submitting the survey',
  'Your feedback has been sent successfully!',
  'Please answer all questions in the survey!',
  'Paytm wallet number added successfully',
  'Something went wrong',
  'try again later',
  'Live',
  'Followers',
  'Following',
  'Create Poll',
  'Polls',
  'FAQs',
  'DM',
  'Volunteer Mode',
  'Resource Details',
  'You are currently not following anyone',
  "You are currently don't have any followers",
  'Enable DM',
  'Subscriptions',
  'Take Survey',
  'Please enter your state',
  'State',
  'Search your state',
];

const INITIAL_STATE = {
  languageString: [...defaultLang],
  langCodes: {},
  loading_intro_img: true,
  intro_img_details: null,
  userDetails: null,
  userId: null,
  restored: true,
  bgColor: APP_GLOBAL_COLOR,
  colorIndex: 0,
  reasons: {},
  reasonsLoading: true,
  navRef: null,
  faqs: [],
  loadingFaqs: true,
  currentScreen: null,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_LANG_STRING:
      return {...state, languageString: action.payload};

    case ActionTypes.SAVE_APP_LANG_CODES:
      return {...state, langCodes: action.payload};

    case ActionTypes.GET_INTRO_IMAGES_START:
      return {...state, loading_intro_img: true};

    case ActionTypes.GET_INTRO_IMAGES_FAIL:
      return {...state, loading_intro_img: false};

    case ActionTypes.GET_INTRO_IMAGES_SUCC:
      return {
        ...state,
        loading_intro_img: false,
        intro_img_details: action.payload,
      };

    case ActionTypes.SAVE_USER_DETAILS:
      return {...state, userDetails: action.payload};

    case ActionTypes.SAVE_USER_ID:
      return {...state, userId: action.payload};

    case ActionTypes.SAVE_USER_COLOR:
      return {...state, bgColor: action.payload, colorIndex: action.index};

    case ActionTypes.GET_REASONS_LIST_SUCC:
      return {...state, reasons: action.payload, reasonsLoading: false};

    case ActionTypes.SAVE_NAV_REF:
      return {...state, navRef: action.payload};

    case ActionTypes.GET_FAQ_START:
      return {...state, loadingFaqs: true};

    case ActionTypes.GET_FAQ_SUCC:
      return {...state, faqs: action.payload, loadingFaqs: false};

    case ActionTypes.GET_FAQ_FAIL:
      return {...state, faqs: [], loadingFaqs: false};

    case ActionTypes.TOGGLE_FAQ:
      return {...state, faqs: action.payload};

    case ActionTypes.ON_SCREEN_CHANGE:
      return {...state, currentScreen: action.payload};

    default:
      return state;
  }
};
