import Icon from '@uptake-ui-icons';
import { InputComponent } from '@uptake-ui-input';

const SearchBarComponent = () => {
	return <InputComponent borderLess placeholder='Search uptake' soft startIcon={<Icon.Search />} type='search' />;
};

export default SearchBarComponent;
