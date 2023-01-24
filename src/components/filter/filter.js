import React, { useContext, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../../assets/styles/global-styles';
import { Context } from '../../stores/context/context';
import FilterIcon from '../../assets/icons/svg/filter-icon';
import { useTheme } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const Home = () => {
  const {colors} = useTheme();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Sort by Title', value: 'title'},
    {label: 'Sort by Priority', value: 'priority'},
    {label: 'Reset', value: 'created_at'}
  ]);
  const { sortBy, setSortBy } = useContext(Context);

  return (
    <View style={{position: 'relative'}}>
        <TouchableOpacity style={styles.filterContainer} onPress={() => setOpen(!open)} activeOpacity={0}>
            <FilterIcon color={colors.secondary}/>
        </TouchableOpacity>

        <DropDownPicker
          disabled
          listMode={'SCROLLVIEW'}
          zIndex={1}
          open={open}
          value={sortBy}
          items={items}
          showTickIcon={sortBy !== 'created_at'}
          setValue={setSortBy}
          setOpen={setOpen}
          setItems={setItems}
          style={styles.sortWrapper}
          containerStyle={styles.sortContainer}
          dropDownContainerStyle={styles.dropdownContainer}
        />
    </View>
  );
}

export default Home;