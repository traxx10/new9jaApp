import {ActionTypes} from './types';
import axios, {AxiosResponse} from 'axios';
import {
  GET_LANGUAGE,
  GET_INTRO_IMAGES,
  GET_REPORT_REASONS,
  GET_ALL_FAQ,
} from '../utils/apis';
import {Dispatch} from 'redux';

export interface AppAction {
  languageString: string[];
  langCodes: {};
  loading_intro_img: boolean;
  intro_img_details: boolean;
  userDetails: boolean;
  userId: boolean;
  restored: boolean;
  bgColor: string;
  colorIndex: number;
  reasons: {};
  reasonsLoading: boolean;
  faqs: [];
  loadingFaqs: boolean;
  currentScreen: boolean;
}

export const saveUserLangSring = (lang: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.SAVE_USER_LANG_STRING,
      payload: lang,
    });
  };
};

export const getUserLangString = (lang: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res: AxiosResponse = await axios.post(GET_LANGUAGE, {
        userLanguage: lang,
      });

      let resData = res.data;
      let langArray = resData.split(',');
      dispatch({
        type: ActionTypes.SAVE_USER_LANG_STRING,
        payload: langArray,
      });
    } catch (error) {
      console.log(error, 'error fetching get_language_fields');
    }
  };
};

export const saveAppLanguageCode = (langCodes: string) => {
  return (dispatch: Dispatch) => {
    dispatch({type: ActionTypes.SAVE_APP_LANG_CODES, payload: langCodes});
  };
};

export const getIntroImages = (lang: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.GET_INTRO_IMAGES_START,
    });

    try {
      const res: AxiosResponse = await axios.post(GET_INTRO_IMAGES, {
        userLanguage: lang,
      });
      dispatch({
        type: ActionTypes.GET_INTRO_IMAGES_SUCC,
        payload: res.data,
      });
    } catch (error) {
      console.log('error fetching intro_images', error);
      dispatch({
        type: ActionTypes.GET_INTRO_IMAGES_FAIL,
      });
    }
  };
};

export const saveUserObject = (details) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.SAVE_USER_DETAILS,
      payload: details,
    });
  };
};

export const saveUserId = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.SAVE_USER_ID,
      payload: id,
    });
  };
};

export const saveUserColor = (color: string, index: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.SAVE_USER_COLOR,
      payload: color,
      index,
    });
  };
};

export const getReportList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res: AxiosResponse = await axios.get(GET_REPORT_REASONS);
      console.log(res.data, 'res_reasons');
      dispatch({
        type: ActionTypes.GET_REASONS_LIST_SUCC,
        payload: res.data,
      });
    } catch (error) {}
  };
};

export const getAllFaq = () => {
  return (dispatch: Dispatch) => {
    dispatch({type: ActionTypes.GET_FAQ_START});
    axios
      .get(GET_ALL_FAQ)
      .then((res) => {
        console.log(res.data, 'getALlFaqs');
        let allFaqs = [];
        res.data.map((data, index) => {
          allFaqs.push({...data, isOpen: false});
        });
        dispatch({type: ActionTypes.GET_FAQ_SUCC, payload: res.data});
      })
      .catch((error) => {
        console.log(error, 'error_fetching_faq');
        dispatch({type: ActionTypes.GET_FAQ_FAIL});
      });
  };
};

export const toggleFaq = (faqs: string[], index: number, open: boolean) => {
  return (dispatch: Dispatch) => {
    let prevFaqs = [...faqs];
    prevFaqs[index].isOpen = !open;

    dispatch({type: ActionTypes.TOGGLE_FAQ, payload: prevFaqs});
  };
};
