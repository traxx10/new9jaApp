import {Navigation} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const getIcons = async () => {
  Navigation.setDefaultOptions({
    bottomTab: {
      selectedIconColor: '#21A7A5',
      selectedTextColor: '#21A7A5',
      textColor: '#535353',
      iconColor: '#535353',
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    topBar: {
      visible: false,
    },
  });
  try {
    const rateIcon = await MaterialIcons.getImageSource('star-rate', 30);
    const opineIcon = await Feather.getImageSource('edit-3', 30);
    const surveyIcon = await FontAwesome.getImageSource('edit', 30);
    const trendsIcon = await Entypo.getImageSource('line-graph', 30);
    const vopineIcon = await MaterialCommunityIcons.getImageSource(
      'message-video',
      30,
    );
    const moreIcon = await Feather.getImageSource('menu', 30);

    return {rateIcon, opineIcon, surveyIcon, trendsIcon, vopineIcon, moreIcon};
  } catch (error) {
    console.log(error, 'error');
  }
};

export const setMainNavRoot = async () => {
  const icons = await getIcons();
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'RateNowScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Rate Now',
                  icon: icons?.rateIcon.uri,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'OpineScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Opine',
                  icon: icons?.opineIcon.uri,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'SurveyScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Survey',
                  icon: icons?.surveyIcon.uri,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'TrendsScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Trends',
                  icon: icons?.trendsIcon.uri,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'VopineScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Vopine',
                  icon: icons?.vopineIcon.uri,
                },
              },
            },
          },
        ],
      },
    },
  });
};
