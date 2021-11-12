import {useNavigation} from '@react-navigation/native';

export const useNavigate = () => {
  const navigation = useNavigation();

  const navigateToVisitingProfile = (userId: string) => {
    navigation.navigate('VisitingProfile', {visitingUserId: userId});
  };

  return {
    navigateToVisitingProfile,
  };
};
