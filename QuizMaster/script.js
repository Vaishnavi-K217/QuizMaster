// Welcome Page Functionality
if (document.getElementById('startBtn')) {
    document.getElementById('startBtn').addEventListener('click', function() {
        window.location.href = 'admin-login.html';
    });
}

// Admin Login Portal Functionality
if (document.getElementById('adminLoginBtn')) {
    document.getElementById('adminLoginBtn').addEventListener('click', function() {
        document.getElementById('adminModal').style.display = 'block';
    });
}

if (document.getElementById('userLoginBtn')) {
    document.getElementById('userLoginBtn').addEventListener('click', function() {
        // Check if user is already logged in
        if (localStorage.getItem('currentUser')) {
            window.location.href = 'categories.html';
        } else {
            window.location.href = 'login.html';
        }
    });
}

// Close modal when clicking X
if (document.querySelector('.close-btn')) {
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('adminModal').style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('adminModal')) {
        document.getElementById('adminModal').style.display = 'none';
    }
});

// Admin Login Form
if (document.getElementById('adminLoginForm')) {
    document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('adminUsername').value.trim();
        const password = document.getElementById('adminPassword').value;
        
        // Check if admin exists (in a real app, this would be server-side)
        const admin = JSON.parse(localStorage.getItem('admin_' + username));
        
        if (admin && admin.password === password) {
            localStorage.setItem('currentAdmin', username);
            document.getElementById('adminModal').style.display = 'none';
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('Invalid admin credentials');
        }
    });
}

// Check if we're on the register page with admin parameter
if (window.location.href.includes('admin=true')) {
    document.getElementById('registerTitle').textContent = 'Register New Admin';
    document.getElementById('isAdmin').value = 'true';
}

// Registration Page Functionality
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        const isAdmin = document.getElementById('isAdmin').value === 'true';
        
        // Validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        const storageKey = isAdmin ? 'admin_' + username : username;
        if (localStorage.getItem(storageKey)) {
            alert(isAdmin ? 'Admin username already exists' : 'Username already exists. Please choose another.');
            return;
        }
        
        // Create user/admin object
        const user = {
            username,
            email,
            password,
            isAdmin,
            scores: {},
            createdAt: new Date().toISOString(),
            lastActive: new Date().toISOString()
        };
        
        // Store user data
        localStorage.setItem(storageKey, JSON.stringify(user));
        
        if (isAdmin) {
            localStorage.setItem('currentAdmin', username);
            window.location.href = 'admin-dashboard.html';
        } else {
            localStorage.setItem('currentUser', username);
            window.location.href = 'categories.html';
        }
    });
}

// Login Page Functionality
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const isAdmin = document.getElementById('isAdmin').value === 'true';
        
        // Check if user exists
        const storageKey = isAdmin ? 'admin_' + username : username;
        const user = JSON.parse(localStorage.getItem(storageKey));
        
        if (user && user.password === password) {
            if (isAdmin) {
                localStorage.setItem('currentAdmin', username);
                window.location.href = 'admin-dashboard.html';
            } else {
                localStorage.setItem('currentUser', username);
                window.location.href = 'categories.html';
            }
            
            // Update last active time
            user.lastActive = new Date().toISOString();
            localStorage.setItem(storageKey, JSON.stringify(user));
        } else {
            alert('Invalid username or password');
        }
    });
}

// Category Page Functionality
if (document.querySelector('.category-grid')) {
    // Display current username
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        document.getElementById('displayUsername').textContent = currentUser;
        
        // Load user's previous scores if any
        const user = JSON.parse(localStorage.getItem(currentUser));
        if (user.scores) {
            document.querySelectorAll('.category-card').forEach(card => {
                const category = card.getAttribute('data-category');
                if (user.scores[category]) {
                    const scoreBadge = document.createElement('div');
                    scoreBadge.className = 'score-badge';
                    scoreBadge.textContent = `High Score: ${user.scores[category]}`;
                    card.appendChild(scoreBadge);
                }
            });
        }
    } else {
        window.location.href = 'login.html';
    }
    
    // Category selection
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            localStorage.setItem('selectedCategory', category);
            window.location.href = 'quiz.html';
        });
    });
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'welcome.html';
    });
    
    // Delete account button
    document.getElementById('deleteAccountBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to permanently delete your account and all your data?')) {
            const currentUser = localStorage.getItem('currentUser');
            localStorage.removeItem(currentUser);
            localStorage.removeItem('currentUser');
            window.location.href = 'welcome.html';
        }
    });
}

// Admin Dashboard Functionality
if (document.getElementById('adminLogoutBtn')) {
    document.getElementById('adminLogoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentAdmin');
        window.location.href = 'welcome.html';
    });
    
    // Load admin dashboard data
    loadAdminDashboard();
}

function loadAdminDashboard() {
    // Get all users
    const users = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let totalQuizzes = 0;
    let totalScores = 0;
    let activeToday = 0;
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.startsWith('admin_') && !['currentUser', 'currentAdmin', 'selectedCategory', 'currentQuizQuestions', 'score', 'totalQuestions'].includes(key)) {
            const user = JSON.parse(localStorage.getItem(key));
            
            // Check if active today
            const lastActive = new Date(user.lastActive);
            if (lastActive >= today) {
                activeToday++;
            }
            
            // Calculate quiz stats
            if (user.scores) {
                const userQuizzes = Object.keys(user.scores).length;
                totalQuizzes += userQuizzes;
                
                // Calculate average score for user
                let userTotalScore = 0;
                Object.values(user.scores).forEach(score => {
                    userTotalScore += score;
                });
                const userAvgScore = userQuizzes > 0 ? Math.round((userTotalScore / userQuizzes) * 5) : 0;
                totalScores += userTotalScore;
                
                user.quizCount = userQuizzes;
                user.avgScore = userAvgScore;
            } else {
                user.quizCount = 0;
                user.avgScore = 0;
            }
            
            users.push(user);
        }
    }
    
    // Update stats
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('activeToday').textContent = activeToday;
    document.getElementById('quizzesTaken').textContent = totalQuizzes;
    document.getElementById('avgScore').textContent = totalQuizzes > 0 ? 
        Math.round((totalScores / totalQuizzes) * 5) + '%' : '0%';
    
    // Populate user table
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${new Date(user.createdAt).toLocaleDateString()}</td>
            <td>${new Date(user.lastActive).toLocaleString()}</td>
            <td>${user.quizCount}</td>
            <td>${user.avgScore}%</td>
            <td>
                <button class="btn btn-danger" onclick="deleteUser('${user.username}')">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function deleteUser(username) {
    if (confirm(`Are you sure you want to delete user ${username}? This cannot be undone.`)) {
        localStorage.removeItem(username);
        loadAdminDashboard(); // Refresh the table
    }
}

// Function to get random questions from a category
function getRandomQuestions(category, count) {
    const allQuestions = [...quizData[category]];
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Quiz Page Functionality
if (document.getElementById('question')) {
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 15;
    const selectedCategory = localStorage.getItem('selectedCategory');
    const currentUser = localStorage.getItem('currentUser');
    let questions = [];
    const timerElement = document.getElementById('timer');
    
    // Check if we already have a set of questions for this quiz session
    const storedQuestions = JSON.parse(localStorage.getItem('currentQuizQuestions'));
    if (storedQuestions) {
        questions = storedQuestions;
    } else {
        // Get new random set of questions
        questions = getRandomQuestions(selectedCategory, 20);
        localStorage.setItem('currentQuizQuestions', JSON.stringify(questions));
    }
    
    // Display category name
    document.getElementById('categoryDisplay').textContent = 
        selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    // Load question function
    function loadQuestion() {
        // Reset timer
        clearInterval(timer);
        timeLeft = 15;
        timerElement.textContent = timeLeft;
        resetTimerStyles();
        
        // Start timer
        timer = setInterval(updateTimer, 1000);
        
        // Update question count
        document.getElementById('questionCount').textContent = 
           `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        
        // Display question and options
        displayQuestion();
    }
    
    // Timer update function
    function updateTimer() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        // Update timer colors
        if (timeLeft <= 5) {
            timerElement.classList.add('danger');
            timerElement.classList.remove('warning');
        } else if (timeLeft <= 10) {
            timerElement.classList.add('warning');
            timerElement.classList.remove('danger');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }
    
    // Reset timer styles
    function resetTimerStyles() {
        timerElement.className = 'timer';
    }
    
    // Display question and options
    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').textContent = currentQuestion.question;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        
        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.setAttribute('data-index', index);
            optionElement.addEventListener('click', selectOption);
            optionsContainer.appendChild(optionElement);
        });
    }
    
    // Select option function
    function selectOption(e) {
        clearInterval(timer);
        const selectedOption = e.target;
        const options = document.querySelectorAll('.option');
        
        // Remove selected class from all options
        options.forEach(option => {
            option.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        selectedOption.classList.add('selected');
        
        // Check if answer is correct
        const selectedAnswer = selectedOption.getAttribute('data-index');
        const correctAnswer = questions[currentQuestionIndex].answer;
        
        if (parseInt(selectedAnswer) === correctAnswer) {
            score++;
            selectedOption.style.backgroundColor = '#4CAF50';
        } else {
            selectedOption.style.backgroundColor = '#ff6b6b';
            // Highlight correct answer
            options[correctAnswer].style.backgroundColor = '#4CAF50';
        }
        
        // Disable all options
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Enable next button
        document.getElementById('nextBtn').disabled = false;
    }
    
    // Next question function
    function nextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            document.getElementById('nextBtn').disabled = true;
        } else {
            // Quiz completed, save score and go to score page
            saveScore();
            localStorage.setItem('score', score);
            localStorage.setItem('totalQuestions', questions.length);
            localStorage.removeItem('currentQuizQuestions');
            window.location.href = 'score.html';
        }
    }
    
    // Save user's score
    function saveScore() {
        if (currentUser) {
            const user = JSON.parse(localStorage.getItem(currentUser));
            if (!user.scores) user.scores = {};
            
            // Only save if this is a new high score
            if (!user.scores[selectedCategory] || score > user.scores[selectedCategory]) {
                user.scores[selectedCategory] = score;
                user.lastActive = new Date().toISOString();
                localStorage.setItem(currentUser, JSON.stringify(user));
            }
        }
    }
    
    // Event listener for next button
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('nextBtn').disabled = true;
    
    // Load first question
    loadQuestion();
}

// Score Page Functionality
if (document.getElementById('score')) {
    const score = parseInt(localStorage.getItem('score')) || 0;
    const totalQuestions = parseInt(localStorage.getItem('totalQuestions')) || 20;
    const selectedCategory = localStorage.getItem('selectedCategory');
    const currentUser = localStorage.getItem('currentUser');
    
    // Display score
    document.getElementById('score').textContent = score;
    document.getElementById('total').textContent = totalQuestions;
    
    // Display category name
    document.getElementById('categoryName').textContent = 
        `Category: ${selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
    
    // Display message based on score
    const scoreMessage = document.getElementById('scoreMessage');
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage >= 80) {
        scoreMessage.textContent = 'Excellent! You nailed it!';
    } else if (percentage >= 60) {
        scoreMessage.textContent = 'Good job! You know your stuff!';
    } else if (percentage >= 40) {
        scoreMessage.textContent = 'Not bad! Keep practicing!';
    } else {
        scoreMessage.textContent = 'Keep trying! You can do better!';
    }
    
    // Button event listeners
    document.getElementById('retryBtn').addEventListener('click', function() {
        // Clear current questions to get new random set
        localStorage.removeItem('currentQuizQuestions');
        window.location.href = 'quiz.html';
    });
    
    document.getElementById('newCategoryBtn').addEventListener('click', function() {
        // Clear current questions
        localStorage.removeItem('currentQuizQuestions');
        window.location.href = 'categories.html';
    });
    
    // Show improvement message if user has previous score
    if (currentUser) {
        const user = JSON.parse(localStorage.getItem(currentUser));
        if (user.scores && user.scores[selectedCategory]) {
            const previousScore = user.scores[selectedCategory];
            if (score > previousScore) {
                const improvementMsg = document.createElement('p');
                improvementMsg.className = 'improvement-message';
                improvementMsg.textContent = `You improved by ${score - previousScore} points from your previous best!`;
                document.querySelector('.score-card').appendChild(improvementMsg);
            }
        }
    }
}