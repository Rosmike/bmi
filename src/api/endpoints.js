async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        return await response.json()
    } catch (error) {
        throw error;
    }
}

export { fetchUsers };
