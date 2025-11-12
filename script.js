const state = {
    currentWorkflow: null,
    workflows: JSON.parse(localStorage.getItem('autoflow-workflows') || '[]'),
    achievements: JSON.parse(localStorage.getItem('autoflow-achievements') || '{}'),
    settings: JSON.parse(localStorage.getItem('autoflow-settings') || '{"personality": "professional", "turboMode": false, "soundEffects": true}'),
    agentColors: {
        planner: '#1a73e8',
        executor: '#34a853',
        qa: '#f9ab00',
        memory: '#6f42c1',
        report: '#ea4335'
    },
    chatOpen: false
};

const elements = {
    activityFeed: document.getElementById('activity-feed'),
    taskTimeline: document.getElementById('task-timeline'),
    systemLogs: document.getElementById('system-logs'),
    goalInput: document.getElementById('goal-input'),
    runGoal: document.getElementById('run-goal'),
    progressFill: document.getElementById('progress-fill'),
    progressPercent: document.getElementById('progress-percent'),
    currentTask: document.getElementById('current-task'),
    notification: document.getElementById('notification'),
    themeToggle: document.getElementById('theme-toggle'),
    commandConsole: document.getElementById('command-console'),
    exportTimeline: document.getElementById('export-timeline'),
    clearLogs: document.getElementById('clear-logs'),
    tryDemo: document.getElementById('try-demo'),
    newWorkflow: document.getElementById('new-workflow'),
    chatToggle: document.getElementById('chat-toggle'),
    chatContainer: document.getElementById('chat-container'),
    chatClose: document.getElementById('chat-close'),
    chatMessages: document.getElementById('chat-messages'),
    chatInput: document.getElementById('chat-input'),
    chatSend: document.getElementById('chat-send')
};

function init() {
    setupEventListeners();
    updateAchievements();
    addLogEntry('SYSTEM', 'AutoFlow AI initialized successfully');
    
    makeDraggable(elements.commandConsole);
    
    if (state.workflows.length === 0) {
        loadSampleWorkflows();
    }
}

function setupEventListeners() {
    elements.runGoal.addEventListener('click', runWorkflow);
    elements.goalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') runWorkflow();
        if (e.key === 'Escape') clearInput();
    });
    
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.exportTimeline.addEventListener('click', exportWorkflow);
    elements.clearLogs.addEventListener('click', clearLogs);
    elements.tryDemo.addEventListener('click', runDemo);
    elements.newWorkflow.addEventListener('click', () => {
        elements.goalInput.value = '';
        elements.goalInput.focus();
    });
    
    elements.chatToggle.addEventListener('click', toggleChat);
    elements.chatClose.addEventListener('click', toggleChat);
    elements.chatSend.addEventListener('click', sendChatMessage);
    elements.chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
    
    document.getElementById('action-template').addEventListener('click', showTemplates);
    document.getElementById('action-history').addEventListener('click', showHistory);
    document.getElementById('action-export').addEventListener('click', exportWorkflow);
    document.getElementById('action-settings').addEventListener('click', showSettings);
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            elements.goalInput.focus();
        }
        
        if (e.key === 'Escape' && state.chatOpen) {
            toggleChat();
        }
    });
}

function toggleChat() {
    state.chatOpen = !state.chatOpen;
    if (state.chatOpen) {
        elements.chatContainer.classList.add('open');
        elements.chatInput.focus();
    } else {
        elements.chatContainer.classList.remove('open');
    }
}

function sendChatMessage() {
    const message = elements.chatInput.value.trim();
    if (!message) return;
    
    addChatMessage(message, 'user');
    elements.chatInput.value = '';
    
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    elements.chatMessages.appendChild(messageElement);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! I'm your AI assistant. How can I help you with AutoFlow AI today?";
    } else if (lowerMessage.includes('workflow') || lowerMessage.includes('automate')) {
        return "AutoFlow AI uses multiple specialized agents to break down your goals into tasks. Try entering a goal like 'Create a marketing plan' in the command console.";
    } else if (lowerMessage.includes('agent') || lowerMessage.includes('planner') || lowerMessage.includes('executor')) {
        return "AutoFlow AI has 5 specialized agents: Planner (breaks down goals), Executor (runs tasks), QA (verifies quality), Memory (stores workflows), and Report (generates summaries).";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
        return "To use AutoFlow AI, simply type your goal in the command console and click Run. The system will simulate multiple AI agents working together to accomplish your goal.";
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('what can')) {
        return "AutoFlow AI features include multi-agent simulation, workflow history, progress tracking, export capabilities, theme switching, and more - all running entirely in your browser.";
    } else {
        return "I understand you're asking about: '" + message + "'. For detailed assistance with AutoFlow AI features, please refer to the documentation or try using the command console to run a workflow.";
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    elements.themeToggle.innerHTML = isDark ? 
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15V1Z" fill="currentColor"/></svg><span>Light Mode</span>' : 
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15V1Z" fill="currentColor"/></svg><span>Dark Mode</span>';
    
    if (isDark) {
        document.documentElement.style.setProperty('--bg-primary', '#0f0f0f');
        document.documentElement.style.setProperty('--bg-secondary', '#1a1a1a');
        document.documentElement.style.setProperty('--bg-tertiary', '#2a2a2a');
        document.documentElement.style.setProperty('--bg-surface', '#1a1a1a');
        document.documentElement.style.setProperty('--text-primary', '#f5f5f5');
        document.documentElement.style.setProperty('--text-secondary', '#aaaaaa');
        document.documentElement.style.setProperty('--border-color', '#333333');
        document.documentElement.style.setProperty('--border-light', '#2a2a2a');
    } else {
        document.documentElement.style.setProperty('--bg-primary', '#ffffff');
        document.documentElement.style.setProperty('--bg-secondary', '#f8f9fa');
        document.documentElement.style.setProperty('--bg-tertiary', '#f1f3f4');
        document.documentElement.style.setProperty('--bg-surface', '#ffffff');
        document.documentElement.style.setProperty('--text-primary', '#202124');
        document.documentElement.style.setProperty('--text-secondary', '#5f6368');
        document.documentElement.style.setProperty('--border-color', '#dadce0');
        document.documentElement.style.setProperty('--border-light', '#e8eaed');
    }
}

function runWorkflow() {
    const goal = elements.goalInput.value.trim();
    if (!goal) return;
    
    clearWorkflow();
    
    state.currentWorkflow = {
        id: Date.now(),
        goal: goal,
        tasks: [],
        status: 'running',
        startTime: new Date(),
        progress: 0
    };
    
    state.workflows.unshift(state.currentWorkflow);
    if (state.workflows.length > 50) state.workflows.pop();
    localStorage.setItem('autoflow-workflows', JSON.stringify(state.workflows));
    
    updateAchievement('first-workflow', true);
    if (state.workflows.length >= 5) updateAchievement('five-workflows', true);
    
    simulateWorkflow(goal);
    
    addLogEntry('SYSTEM', `Starting workflow: "${goal}"`);
}

function runDemo() {
    const demos = [
        "Create a marketing plan for a new productivity app",
        "Plan a 7-day vacation to Japan",
        "Develop a content calendar for a tech blog",
        "Design a workout routine for beginners"
    ];
    const randomDemo = demos[Math.floor(Math.random() * demos.length)];
    elements.goalInput.value = randomDemo;
    runWorkflow();
}

async function simulateWorkflow(goal) {
    updateProgress(0, "Initializing agents...");
    
    await activateAgent('planner', 'Analyzing goal and breaking it down into tasks...');
    const tasks = await plannerAgent(goal);
    addActivity('planner', `I've broken down "${goal}" into ${tasks.length} tasks`);
    
    updateTimeline(tasks);
    
    await activateAgent('executor', 'Starting task execution...');
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        updateProgress((i / tasks.length) * 100, `Executing: ${task.title}`);
        
        await activateAgent('executor', `Working on: ${task.title}`);
        await executorAgent(task);
        addActivity('executor', `Completed: ${task.title}`);
        
        await activateAgent('qa', `Verifying: ${task.title}`);
        await qaAgent(task);
        addActivity('qa', `Verified: ${task.title}`);
        
        updateTaskStatus(i, 'completed');
    }
    
    await activateAgent('memory', 'Storing workflow in memory...');
    await memoryAgent(state.currentWorkflow);
    addActivity('memory', 'Workflow saved to memory');
    
    await activateAgent('report', 'Generating final report...');
    const report = await reportAgent(state.currentWorkflow);
    addActivity('report', 'Final report generated');
    
    updateProgress(100, "Workflow completed!");
    state.currentWorkflow.status = 'completed';
    state.currentWorkflow.endTime = new Date();
    state.currentWorkflow.report = report;
    
    localStorage.setItem('autoflow-workflows', JSON.stringify(state.workflows));
    
    showNotification('Workflow completed successfully!', 'success');
    addLogEntry('SYSTEM', `Workflow completed: "${goal}"`);
    
    setTimeout(() => {
        if (confirm('Workflow completed! Would you like to download the report?')) {
            downloadReport(report, goal);
        }
    }, 1000);
}

async function plannerAgent(goal) {
    const delay = 1500;
    await simulateDelay(delay);
    
    let tasks = [];
    
    if (goal.toLowerCase().includes('marketing') || goal.toLowerCase().includes('promote')) {
        tasks = [
            { id: 1, title: "Market Research", description: "Analyze target audience and competitors", status: "pending" },
            { id: 2, title: "Define Value Proposition", description: "Identify unique selling points", status: "pending" },
            { id: 3, title: "Create Content Strategy", description: "Plan blog posts, social media, and ads", status: "pending" },
            { id: 4, title: "Set KPIs", description: "Define key performance indicators", status: "pending" },
            { id: 5, title: "Allocate Budget", description: "Determine marketing spend across channels", status: "pending" }
        ];
    } else if (goal.toLowerCase().includes('vacation') || goal.toLowerCase().includes('trip')) {
        tasks = [
            { id: 1, title: "Research Destinations", description: "Find the best places to visit", status: "pending" },
            { id: 2, title: "Book Flights", description: "Find and book the best flight options", status: "pending" },
            { id: 3, title: "Arrange Accommodation", description: "Book hotels or rentals", status: "pending" },
            { id: 4, title: "Create Itinerary", description: "Plan daily activities and sights", status: "pending" },
            { id: 5, title: "Prepare Travel Documents", description: "Check visa requirements and travel insurance", status: "pending" }
        ];
    } else if (goal.toLowerCase().includes('content') || goal.toLowerCase().includes('calendar')) {
        tasks = [
            { id: 1, title: "Define Content Themes", description: "Establish main topics and categories", status: "pending" },
            { id: 2, title: "Research Keywords", description: "Identify relevant search terms", status: "pending" },
            { id: 3, title: "Plan Publishing Schedule", description: "Create a timeline for content releases", status: "pending" },
            { id: 4, title: "Assign Content Creation", description: "Delegate writing tasks to team members", status: "pending" },
            { id: 5, title: "Set Up Promotion Strategy", description: "Plan how to distribute content", status: "pending" }
        ];
    } else {
        tasks = [
            { id: 1, title: "Research Phase", description: "Gather information and requirements", status: "pending" },
            { id: 2, title: "Planning Phase", description: "Create a detailed action plan", status: "pending" },
            { id: 3, title: "Execution Phase", description: "Implement the plan step by step", status: "pending" },
            { id: 4, title: "Review Phase", description: "Evaluate results and make adjustments", status: "pending" },
            { id: 5, title: "Finalization", description: "Complete and deliver the final output", status: "pending" }
        ];
    }
    
    state.currentWorkflow.tasks = tasks;
    return tasks;
}

async function executorAgent(task) {
    const delay = 2000;
    await simulateDelay(delay);
    
    const subtasks = [
        "Gathering resources...",
        "Processing data...",
        "Applying algorithms...",
        "Generating output..."
    ];
    
    for (const subtask of subtasks) {
        addLogEntry('EXECUTOR', `${task.title}: ${subtask}`);
        await simulateDelay(delay / subtasks.length);
    }
    
    task.status = 'executed';
    return task;
}

async function qaAgent(task) {
    const delay = 1200;
    await simulateDelay(delay);
    
    const checks = [
        "Checking completeness...",
        "Verifying accuracy...",
        "Testing functionality...",
        "Validating results..."
    ];
    
    for (const check of checks) {
        addLogEntry('QA', `${task.title}: ${check}`);
        await simulateDelay(delay / checks.length);
    }
    
    task.status = 'verified';
    return task;
}

async function memoryAgent(workflow) {
    const delay = 800;
    await simulateDelay(delay);
    
    addLogEntry('MEMORY', 'Storing workflow data...');
    await simulateDelay(delay);
    addLogEntry('MEMORY', 'Workflow saved successfully');
    
    return workflow;
}

async function reportAgent(workflow) {
    const delay = 1500;
    await simulateDelay(delay);
    
    const report = `
AUTOMATION REPORT
=================
Goal: ${workflow.goal}
Completed: ${new Date().toLocaleString()}
Duration: ${Math.round((workflow.endTime - workflow.startTime) / 1000)} seconds
Tasks Completed: ${workflow.tasks.length}

TASK BREAKDOWN:
${workflow.tasks.map(task => `✓ ${task.title}: ${task.description}`).join('\n')}

SUMMARY:
All tasks were completed successfully. The workflow executed as planned with all quality checks passed. The final output meets the specified requirements.

NEXT STEPS:
Consider implementing the plan and monitoring results for continuous improvement.

Generated by AutoFlow AI Web Edition
            `;
    
    addLogEntry('REPORT', 'Final report generated');
    return report;
}

async function activateAgent(agent, message) {
    const bubble = document.getElementById(`${agent}-bubble`);
    bubble.classList.add('active');
    
    addActivity(agent, message, true);
    
    const delay = 1500;
    await simulateDelay(delay);
    
    bubble.classList.remove('active');
}

function addActivity(agent, message, withTyping = false) {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';
    
    const agentName = agent.charAt(0).toUpperCase() + agent.slice(1);
    const avatar = document.createElement('div');
    avatar.className = 'activity-avatar';
    avatar.style.backgroundColor = state.agentColors[agent];
    avatar.textContent = agentName.charAt(0);
    
    const content = document.createElement('div');
    content.className = 'activity-content';
    
    const header = document.createElement('div');
    header.className = 'activity-header';
    
    const agentSpan = document.createElement('span');
    agentSpan.className = 'activity-agent';
    agentSpan.textContent = `${agentName} Agent`;
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'activity-time';
    timeSpan.textContent = 'Just now';
    
    header.appendChild(agentSpan);
    header.appendChild(timeSpan);
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'activity-message';
    
    if (withTyping) {
        messageDiv.classList.add('typing');
        setTimeout(() => {
            messageDiv.classList.remove('typing');
            messageDiv.textContent = message;
        }, 1500);
    } else {
        messageDiv.textContent = message;
    }
    
    content.appendChild(header);
    content.appendChild(messageDiv);
    
    activityItem.appendChild(avatar);
    activityItem.appendChild(content);
    
    elements.activityFeed.prepend(activityItem);
    
    elements.activityFeed.scrollTop = 0;
}

function updateTimeline(tasks) {
    elements.taskTimeline.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.id = `task-${task.id}`;
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        const header = document.createElement('div');
        header.className = 'timeline-header';
        
        const title = document.createElement('span');
        title.className = 'timeline-title';
        title.textContent = task.title;
        
        const status = document.createElement('span');
        status.className = 'timeline-status';
        status.textContent = 'Pending';
        status.id = `task-status-${task.id}`;
        
        header.appendChild(title);
        header.appendChild(status);
        
        const desc = document.createElement('p');
        desc.className = 'timeline-desc';
        desc.textContent = task.description;
        
        content.appendChild(header);
        content.appendChild(desc);
        
        timelineItem.appendChild(content);
        elements.taskTimeline.appendChild(timelineItem);
    });
}

function updateTaskStatus(taskIndex, status) {
    const task = state.currentWorkflow.tasks[taskIndex];
    const statusElement = document.getElementById(`task-status-${task.id}`);
    if (statusElement) {
        statusElement.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        
        if (status === 'completed') {
            statusElement.style.backgroundColor = '#e6f4ea';
            statusElement.style.color = '#137333';
        }
    }
}

function updateProgress(percent, currentTask) {
    elements.progressFill.style.width = `${percent}%`;
    elements.progressPercent.textContent = Math.round(percent);
    elements.currentTask.textContent = currentTask;
}

function addLogEntry(agent, message) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    
    const time = new Date().toLocaleTimeString();
    
    logEntry.innerHTML = `
        <span class="log-time">[${time}]</span>
        <span class="log-agent">[${agent.toUpperCase()}]</span>
        <span class="log-message">${message}</span>
    `;
    
    elements.systemLogs.appendChild(logEntry);
    elements.systemLogs.scrollTop = elements.systemLogs.scrollHeight;
}

function showNotification(message, type = 'info') {
    elements.notification.className = `notification ${type}`;
    elements.notification.querySelector('.notification-message').textContent = message;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

function updateAchievements() {
    for (const [id, achieved] of Object.entries(state.achievements)) {
        const element = document.getElementById(id);
        if (element) {
            if (achieved) {
                element.classList.remove('locked');
                element.classList.add('unlocked');
            } else {
                element.classList.add('locked');
                element.classList.remove('unlocked');
            }
        }
    }
}

function updateAchievement(id, achieved) {
    state.achievements[id] = achieved;
    localStorage.setItem('autoflow-achievements', JSON.stringify(state.achievements));
    updateAchievements();
}

function exportWorkflow() {
    if (!state.currentWorkflow) {
        showNotification('No workflow to export', 'warning');
        return;
    }
    
    const dataStr = JSON.stringify(state.currentWorkflow, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `autoflow-workflow-${state.currentWorkflow.id}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Workflow exported as JSON', 'success');
    addLogEntry('SYSTEM', 'Workflow exported to JSON');
}

function downloadReport(report, goal) {
    const dataStr = 'data:text/plain;charset=utf-8,' + encodeURIComponent(report);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `autoflow-report-${goal.substring(0, 20)}.txt`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function clearInput() {
    elements.goalInput.value = '';
}

function clearLogs() {
    elements.systemLogs.innerHTML = '';
    addLogEntry('SYSTEM', 'Logs cleared');
}

function clearWorkflow() {
    elements.activityFeed.innerHTML = `
        <div class="activity-item">
            <div class="activity-avatar" style="background-color: #1a73e8;">P</div>
            <div class="activity-content">
                <div class="activity-header">
                    <span class="activity-agent">Planner Agent</span>
                    <span class="activity-time">Just now</span>
                </div>
                <div class="activity-message">
                    Ready to break down your goals into actionable tasks.
                </div>
            </div>
        </div>
    `;
    
    elements.taskTimeline.innerHTML = `
        <div class="timeline-item">
            <div class="timeline-content">
                <div class="timeline-header">
                    <span class="timeline-title">Waiting for input</span>
                    <span class="timeline-status">Idle</span>
                </div>
                <p class="timeline-desc">Enter a goal in the command console to begin automation.</p>
            </div>
        </div>
    `;
    
    updateProgress(0, "None");
}

function loadSampleWorkflows() {
    const sampleWorkflows = [
        {
            id: 1,
            goal: "Create a social media strategy",
            tasks: [
                { id: 1, title: "Audience Research", description: "Identify target demographics", status: "completed" },
                { id: 2, title: "Platform Selection", description: "Choose appropriate social networks", status: "completed" },
                { id: 3, title: "Content Planning", description: "Develop posting schedule and themes", status: "completed" }
            ],
            status: "completed",
            startTime: new Date(Date.now() - 86400000),
            endTime: new Date(Date.now() - 86300000)
        },
        {
            id: 2,
            goal: "Plan a product launch",
            tasks: [
                { id: 1, title: "Market Analysis", description: "Research competitors and market fit", status: "completed" },
                { id: 2, title: "Launch Timeline", description: "Create detailed schedule", status: "completed" },
                { id: 3, title: "Marketing Materials", description: "Develop promotional content", status: "completed" }
            ],
            status: "completed",
            startTime: new Date(Date.now() - 172800000),
            endTime: new Date(Date.now() - 171800000)
        }
    ];
    
    state.workflows = sampleWorkflows;
    localStorage.setItem('autoflow-workflows', JSON.stringify(state.workflows));
}

function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = element.querySelector('.console-header');
    
    header.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function simulateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showTemplates() {
    alert('Workflow templates feature would open here');
}

function showHistory() {
    alert('Workflow history feature would open here');
}

function showSettings() {
    alert('Settings panel would open here');
}

document.addEventListener('DOMContentLoaded', init);
