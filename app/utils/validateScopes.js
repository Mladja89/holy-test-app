const containsAllScopes = (scopeOne, scopeTwo) => scopeTwo.every(scopeTwoItem => scopeOne.includes(scopeTwoItem));
const compareRouteRedirect = (scopeOne, scopeTwo) => scopeOne.length === scopeTwo.length && scopeOne.slice().sort().every(function(value, index) { return value === scopeTwo.slice().sort()[index]});

export {
    containsAllScopes,
    compareRouteRedirect
};
