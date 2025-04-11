// Registration function
async function registerUser(username, email, password, isAdmin) {
    const response = await fetch('auth_api.php?action=register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
            confirmPassword: password,
            isAdmin
        })
    });
    return await response.json();
}

// Login function
async function loginUser(username, password) {
    const response = await fetch('auth_api.php?action=login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    });
    return await response.json();
}

// Logout function
async function logoutUser() {
    const response = await fetch('auth_api.php?action=logout');
    return await response.json();
}

// Delete account function
async function deleteAccount(username) {
    const response = await fetch('auth_api.php?action=delete_account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username })
    });
    return await response.json();
}






// Get questions from API
async function getQuestions(category, limit = 20) {
    const response = await fetch(`quiz_api.php?action=get_questions&category=${category}&limit=${limit}`);
    return await response.json();
}

// Save score to API
async function saveScore(username, category, score, totalQuestions) {
    const response = await fetch('quiz_api.php?action=save_score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, category, score, totalQuestions })
    });
    return await response.json();
}

// Get user scores
async function getUserScores(username) {
    const response = await fetch(`quiz_api.php?action=get_user_scores&username=${username}`);
    return await response.json();
}




// Load admin dashboard data
async function loadAdminDashboard() {
    const currentAdmin = localStorage.getItem('currentAdmin');
    if (!currentAdmin) {
        window.location.href = 'admin-login.html';
        return;
    }

    // Get stats
    const statsResponse = await fetch(`admin_api.php?action=get_stats&admin=${currentAdmin}`);
    const statsData = await statsResponse.json();
    
    if (statsData.success) {
        document.getElementById('totalUsers').textContent = statsData.stats.totalUsers;
        document.getElementById('activeToday').textContent = statsData.stats.activeToday;
        document.getElementById('quizzesTaken').textContent = statsData.stats.quizzesTaken;
        document.getElementById('avgScore').textContent = statsData.stats.avgScore + '%';
    }

    // Get users
    const usersResponse = await fetch(`admin_api.php?action=get_users&admin=${currentAdmin}`);
    const usersData = await usersResponse.json();
    
    if (usersData.success) {
        const tableBody = document.getElementById('userTableBody');
        tableBody.innerHTML = '';
        
        usersData.users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${new Date(user.joined).toLocaleDateString()}</td>
                <td>${user.lastActive ? new Date(user.lastActive).toLocaleString() : 'Never'}</td>
                <td>${user.quizzes}</td>
                <td>${user.avgScore}%</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteUser('${user.username}')">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Delete user function
async function deleteUser(username) {
    const currentAdmin = localStorage.getItem('currentAdmin');
    if (!currentAdmin) return;
    
    if (confirm(`Are you sure you want to delete user ${username}? This cannot be undone.`)) {
        const response = await fetch(`admin_api.php?action=delete_user&username=${username}&admin=${currentAdmin}`);
        const data = await response.json();
        
        if (data.success) {
            loadAdminDashboard(); // Refresh the table
        } else {
            alert(data.message);
        }
    }
}