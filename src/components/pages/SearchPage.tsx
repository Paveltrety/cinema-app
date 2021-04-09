import React from "react";

const SearchPage: React.FC = () => {
  function useDebouncedFunction(delay: number) {
    let timeoutId: any;

    return (valueText: string) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => console.log(valueText), delay);
    };
  }
  const debouncedValueLogging = useDebouncedFunction(1000);

  let changeText = (e: any) => {
    if (e.target.value.length > 3) debouncedValueLogging(e.target.value);
  };
  return (
    <div className="wrapper">
      <div className="wrapper__search">
        <div className="search__title">
          Unlimited movies, TV shows, and more.
        </div>
        <div className="search__desc">Watch anywhere. Cancel anytime.</div>
        <div className="search__block">
          <input
            className="search__block-input"
            placeholder="Поиск"
            type="search"
            onChange={changeText}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
