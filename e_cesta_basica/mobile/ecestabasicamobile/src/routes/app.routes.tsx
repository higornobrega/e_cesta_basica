// import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FilePlus, Newspaper, MagnifyingGlass} from 'phosphor-react-native';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';
import { New } from '../screens/New';
import { Pesquisas } from '../screens/Pesquisas';
import { Find } from '../screens/Find';
// import { Signin } from '../screens/Signin';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

  const { colors, sizes } = useTheme();

  const size = sizes[6]

  return (
      <Navigator screenOptions={{
         headerShown: false,
        tabBarLabelPosition: 'beside-icon',
         tabBarActiveTintColor: colors.yellow[500],
         tabBarInactiveTintColor: colors.gray[300],
         tabBarStyle: {
           position: 'absolute',
           height: sizes[22],
           borderTopWidth: 0,
           backgroundColor: colors.gray[800]
         },
         tabBarItemStyle: {
           position: 'relative',
           top: Platform.OS === 'android' ? -10 : 0
         }
    }}>
      <Screen 
        name="new"

        component={New}
        options={{
            tabBarIcon: ({ color }) => <FilePlus color={color} size={size}
            />,
           tabBarLabel: 'Criar Pesquisa'
        }}
      />
      <Screen 
        name="pesquisas"
        component={Pesquisas}
        options={{
        tabBarIcon: ({ color }) => <Newspaper color={color} size={size} 
            />,
           tabBarLabel: 'Minhas Pesquisas'
        }}
      />

      <Screen 
        name="find"
        component={Find}
        options={{ tabBarButton: () => null }}
      />

      {/* <Screen 
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      /> */}
    </Navigator>
  )
}