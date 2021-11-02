import React, {useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {connect} from 'react-redux';
import * as actions from '../../actions/pokimonDetailsScreenActions';
import {SliderBox} from 'react-native-image-slider-box';
import DetailsCards from './detailsCards/detailsCards';
import Loader from '../../components/loader/loader';
const mapStateToProps = ({pokimonDetailsReducer}) => {
  return {
    isLoading: pokimonDetailsReducer.isLoading,
    pokimonDetails: pokimonDetailsReducer.pokimonDetails,
  };
};
const PokimonDetails = props => {
  const _goBack = () => {
    props.navigation.goBack();
  };
  useEffect(() => {
    props.dispatch(actions.fetchInitialData({id: props.route.params.id}));
  }, []);
  const cards = [
    {
      title: 'Name',
      value: props.pokimonDetails?.name,
      subtitle: 'The name for this resource.',
    },
    {
      title: 'Height',
      value: props.pokimonDetails?.height,
      subtitle: 'The height of this Pokémon in decimetres.',
    },
    {
      title: 'Weight',
      value: props.pokimonDetails?.weight,
      subtitle: 'The weight of this Pokémon in hectograms..',
    },
    {
      title: 'Order',
      value: props.pokimonDetails?.order,
      subtitle: 'Order for sorting.',
    },
    {
      title: 'Base experience',
      value: props.pokimonDetails?.base_experience,
      subtitle: 'The base experience gained for defeating this Pokémon.',
    },
  ];
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title={props.pokimonDetails?.name ?? 'Pokimon name'} />
      </Appbar.Header>
      {!props.isLoading ? (
        <>
          <SliderBox
            images={
              props.pokimonDetails
                ? Object.values(props.pokimonDetails.sprites)
                    .reverse()
                    .filter(item => typeof item === 'string')
                : []
            }
          />
          <DetailsCards cards={cards} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default connect(mapStateToProps)(PokimonDetails);
