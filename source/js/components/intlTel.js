import intlTelInput from 'intl-tel-input';
const input = document.querySelectorAll(".tel");

if(input) {
  input.forEach(item => {
    intlTelInput(item, {
      countrySearch: false,
      defaultCountry: "ua",
      initialCountry: "auto",
      // preferredCountries: ["ua", 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz', 'tm', 'ge', "ru",],
      autoPlaceholder: 'aggressive',
      nationalMode: false,
      customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return "+" + selectedCountryData.dialCode;
      },
      geoIpLookup: function (success, failure) {
        fetch('https://opt-master.academy/requests/geo.php')
        .then(response => response.json())
        .then(resp => {
          const countryCode = (resp && resp.countrycode) ? resp.countrycode : "ua";
          success(countryCode);
        })
      },
      separateDialCode: false,
      formatOnDisplay: false,
    });
  })
}




