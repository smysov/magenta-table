const API_URL_SMALL = `http://www.filltext.com/?rows=32
&date={date|01-11-1991,01-11-2021}
&name={firstName}&surname={lastName}
&email={email}
&phone={phone|(xxx)xxx-xx-xx}
&country={country}
&city={city}
&street={streetAddress}
&id={number|1000}`;

const API_URL_BIG = `http://www.filltext.com/?rows=100
&date={date|01-11-1991,01-11-2021}
&name={firstName}&surname={lastName}
&email={email}
&phone={phone|(xxx)xxx-xx-xx}
&country={country}
&city={city}
&street={streetAddress}
&id={number|1000}`;

export { API_URL_SMALL, API_URL_BIG };
