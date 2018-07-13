let config;

console.log(process.env);

switch (process.env.REACT_APP_ENV) {
    case('test') :
        config = {
            apiUrl: 'http://localhost:8008/'
        };
        break;
    case ('production'):
        config = {
            apiUrl: 'http://37.139.9.77:8000/'
        };
        break;
    default:
        config = {
            apiUrl: 'http://localhost:8000/'
        };
}

export default config;