import { FormRow, FormRowSelect } from '.'; // from '.' MEANS FROM THE SAME FOLDER 
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  // GET GLOBAL VARIABLES/PROPERTY THAT HELP IN SEARCH FUNCTIONALITY
  const {
    isLoading,
    search,
    handleChange,
    searchStatus,
    statusOptions,
    jobTypeOptions,
    searchType,
    clearFilters,
    sort,
    sortOptions,
  } = useAppContext();

  // CHANGE THE STATE SEARCH VALUES AS USER TYPES IN THE FRONT END
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  // CLEAR THE SEARCH INPUTS
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>

        {/* search position */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          ></FormRow>

          {/* search by status */}
          <FormRowSelect
            labelText='job status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          ></FormRowSelect>

          {/* search by type */}
          <FormRowSelect
            labelText='job type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          ></FormRowSelect>

          {/* sort */}
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>

          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;