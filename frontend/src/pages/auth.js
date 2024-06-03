export const getUserId = () => {
    // Implement logic to retrieve user ID from session storage, JWT token, or wherever it is stored
    // For example:
    const userId = sessionStorage.getItem('userId');
    return userId;
};

export const getUserRole = () => {
    // Implement logic to retrieve user role from session storage, JWT token, or wherever it is stored
    // For example:
    const userRole = sessionStorage.getItem('userRole');
    return userRole;
};
