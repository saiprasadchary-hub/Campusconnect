let sampleProducts = [
    {
        id: 1,
        title: "Calculus Textbook 2024 Edition",
        price: 35,
        category: "books",
        badge: "Popular",
        seller: { name: "JS", avatar: "JS" },
        description: "Latest edition, barely used with no highlights",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Physics Complete Notes",
        price: 8,
        category: "notes",
        badge: "Digital",
        seller: { name: "AS", avatar: "AS" },
        description: "Complete semester notes with diagrams",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Graphing Calculator",
        price: 45,
        category: "electronics",
        badge: "Bestseller",
        seller: { name: "MJ", avatar: "MJ" },
        description: "TI-84 Plus with case and cables",
        image: "https://m.media-amazon.com/images/I/71Jvd1EWeeL.jpg"
    },
    {
        id: 4,
        title: "University Hoodie Size L",
        price: 25,
        category: "clothing",
        badge: "New",
        seller: { name: "TS", avatar: "TS" },
        description: "Brand new with tags, official campus store",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

let sampleEvents = [
    {
        id: 1,
        title: "Tech Career Fair 2024",
        day: "25",
        month: "OCT",
        location: "Main Campus Hall",
        time: "10:00 AM - 4:00 PM",
        description: "Connect with top tech companies and startups",
        registered: false
    },
    {
        id: 2,
        title: "Book Exchange Festival",
        day: "28",
        month: "OCT",
        location: "Library Plaza",
        time: "9:00 AM - 2:00 PM",
        description: "Buy, sell, and trade textbooks with students",
        registered: true
    },
    {
        id: 3,
        title: "Startup Pitch Competition",
        day: "05",
        month: "NOV",
        location: "Business School",
        time: "2:00 PM - 5:00 PM",
        description: "Watch students pitch ideas to investors",
        registered: false
    }
];

let sampleNotes = [
    {
        id: 1,
        title: "Calculus I",
        subject: "Mathematics",
        chapters: 12,
        price: 5,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Physics Mechanics",
        subject: "Physics",
        chapters: 8,
        price: 4,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Organic Chemistry",
        subject: "Chemistry",
        chapters: 10,
        price: 6,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Data Structures",
        subject: "Computer Science",
        chapters: 15,
        price: 7,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

let myListings = [
    {
        id: 1,
        title: "Calculus Textbook",
        price: 35,
        status: "available",
        views: 24,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Physics Notes",
        price: 8,
        status: "sold",
        views: 45,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Graphing Calculator",
        price: 45,
        status: "available",
        views: 18,
        image: "https://images.unsplash.com/photo-1558618666-fcd25856cd63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

let savedItems = [
    {
        id: 4,
        title: "Programming Books Bundle",
        price: 40,
        category: "books",
        savedDate: "2024-10-20",
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Scientific Calculator",
        price: 15,
        category: "electronics",
        savedDate: "2024-10-18",
        image: "https://images.unsplash.com/photo-1583536669170-1fd04889fd6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

let notifications = [
    {
        id: 1,
        type: "success",
        title: "Item Sold!",
        message: "Your Calculus textbook has been purchased by Sarah.",
        time: "2 hours ago",
        icon: "fas fa-check-circle",
        read: false
    },
    {
        id: 2,
        type: "warning",
        title: "Event Reminder",
        message: "Tech Career Fair starts tomorrow at 10 AM.",
        time: "5 hours ago",
        icon: "fas fa-calendar-exclamation",
        read: false
    },
    {
        id: 3,
        type: "info",
        title: "New Message",
        message: "Mike sent you a message about your calculator.",
        time: "1 day ago",
        icon: "fas fa-comment-alt",
        read: false
    }
];

let currentProduct = null;

document.addEventListener('DOMContentLoaded', function() {
    displayTrendingProducts();
    displayUpcomingEvents();
    displayAllEvents();
    displayNotifications();
    displayNotes();
    displayMyListings();
    displaySavedItems();
    updateNotificationBadge();
    
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('eventDate').value = formattedDate;
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});

function checkScreenSize() {
    const sidebar = document.getElementById('sidebar');
    const bottomNav = document.querySelector('.bottom-nav');
    
    if (window.innerWidth <= 1024) {
        sidebar.classList.remove('active');
        bottomNav.style.display = 'flex';
    } else {
        sidebar.classList.add('active');
        bottomNav.style.display = 'none';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-item-mobile').forEach(item => {
        item.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
    
    if (['home', 'events', 'notifications', 'profile'].includes(pageId)) {
        const navItems = document.querySelectorAll('.nav-item');
        const mobileNavItems = document.querySelectorAll('.nav-item-mobile');
        
        switch(pageId) {
            case 'home':
                navItems[0].classList.add('active');
                mobileNavItems[0].classList.add('active');
                break;
            case 'events':
                navItems[1].classList.add('active');
                mobileNavItems[1].classList.add('active');
                break;
            case 'notifications':
                navItems[3].classList.add('active');
                mobileNavItems[2].classList.add('active');
                break;
            case 'profile':
                navItems[4].classList.add('active');
                mobileNavItems[3].classList.add('active');
                break;
        }
    }
    
    if (window.innerWidth <= 1024) {
        toggleSidebar();
    }
}

function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function showSellModal() {
    showModal('sellModal');
}

function showEditProfileModal() {
    showModal('editProfileModal');
}

function showCreateEventModal() {
    showModal('createEventModal');
}

function showMarketplace() {
    showPage('home');
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const searchResults = document.getElementById('searchResults');
    
    if (searchTerm.length === 0) {
        searchResults.classList.remove('active');
        return;
    }

    const results = [
        ...sampleProducts.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
        ).map(item => ({...item, type: 'product'})),
        
        ...sampleEvents.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm)
        ).map(event => ({...event, type: 'event'})),
        
        ...sampleNotes.filter(note =>
            note.title.toLowerCase().includes(searchTerm) ||
            note.subject.toLowerCase().includes(searchTerm)
        ).map(note => ({...note, type: 'note'}))
    ];

    displaySearchResults(results);
    searchResults.classList.add('active');
}

function displaySearchResults(results) {
    const container = document.getElementById('searchResults');
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = '<div class="search-result-item">No results found</div>';
        return;
    }

    results.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.onclick = () => handleSearchResultClick(item);
        
        if (item.type === 'product') {
            resultItem.innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; border-radius: 8px; background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
                    <div>
                        <div style="font-weight: 500;">${item.title}</div>
                        <div style="color: var(--primary); font-weight: 600;">$${item.price}</div>
                        <div style="font-size: 0.8rem; color: var(--dark-gray);">Product • ${item.category}</div>
                    </div>
                </div>
            `;
        } else if (item.type === 'event') {
            resultItem.innerHTML = `
                <div>
                    <div style="font-weight: 500;">${item.title}</div>
                    <div style="font-size: 0.8rem; color: var(--dark-gray);">Event • ${item.location}</div>
                </div>
            `;
        } else if (item.type === 'note') {
            resultItem.innerHTML = `
                <div>
                    <div style="font-weight: 500;">${item.title}</div>
                    <div style="font-size: 0.8rem; color: var(--dark-gray);">Notes • ${item.subject}</div>
                </div>
            `;
        }

        container.appendChild(resultItem);
    });
}

function handleSearchResultClick(item) {
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('searchInput').value = '';

    if (item.type === 'product') {
        initiatePurchase(item.id);
    } else if (item.type === 'event') {
        showEventDetail(item.id);
    } else if (item.type === 'note') {
        showNotesDetail(item.id);
    }
}

function registerForEvent(eventId) {
    const event = sampleEvents.find(e => e.id === eventId);
    if (event) {
        event.registered = !event.registered;
        displayAllEvents();
        displayUpcomingEvents();
        
        if (event.registered) {
            showToast(`Successfully registered for ${event.title}!`);
            notifications.unshift({
                id: notifications.length + 1,
                type: "success",
                title: "Event Registration",
                message: `You've registered for ${event.title}`,
                time: "Just now",
                icon: "fas fa-calendar-check",
                read: false
            });
            displayNotifications();
            updateNotificationBadge();
        } else {
            showToast(`Unregistered from ${event.title}`);
        }
    }
}

function displayTrendingProducts() {
    const container = document.getElementById('trendingProducts');
    container.innerHTML = '';
    
    sampleProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${product.image}')">
                    <div class="product-badge">${product.badge}</div>
                </div>
                <div class="product-content">
                    <div class="product-title">${product.title}</div>
                    <div class="product-price">$${product.price}</div>
                    <div class="product-seller">
                        <div class="seller-avatar">${product.seller.avatar}</div>
                        ${product.seller.name}
                    </div>
                    <button class="buy-btn" onclick="initiatePurchase(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Buy Now
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

function displayUpcomingEvents() {
    const container = document.getElementById('upcomingEvents');
    container.innerHTML = '';
    
    sampleEvents.slice(0, 2).forEach(event => {
        const eventCard = `
            <div class="card">
                <div class="event-card">
                    <div class="event-date">
                        <div class="event-day">${event.day}</div>
                        <div class="event-month">${event.month}</div>
                    </div>
                    <div class="event-details">
                        <div class="event-title">${event.title}</div>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i> ${event.location}
                        </div>
                        <div class="event-time">${event.time}</div>
                        <button class="register-btn ${event.registered ? 'registered' : ''}" 
                                onclick="event.stopPropagation(); registerForEvent(${event.id})">
                            ${event.registered ? 'Registered' : 'Register Now'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += eventCard;
    });
}

function displayAllEvents() {
    const container = document.getElementById('allEvents');
    container.innerHTML = '';
    
    sampleEvents.forEach(event => {
        const eventCard = `
            <div class="card">
                <div class="event-card">
                    <div class="event-date">
                        <div class="event-day">${event.day}</div>
                        <div class="event-month">${event.month}</div>
                    </div>
                    <div class="event-details">
                        <div class="event-title">${event.title}</div>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i> ${event.location}
                        </div>
                        <div class="event-time">${event.time}</div>
                        <button class="register-btn ${event.registered ? 'registered' : ''}" 
                                onclick="event.stopPropagation(); registerForEvent(${event.id})">
                            ${event.registered ? 'Registered' : 'Register Now'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += eventCard;
    });
}

function displayNotes() {
    const container = document.getElementById('notesGrid');
    container.innerHTML = '';
    
    sampleNotes.forEach(note => {
        const noteCard = `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${note.image}')">
                    <div class="product-badge">Notes</div>
                </div>
                <div class="product-content">
                    <div class="product-title">${note.title}</div>
                    <div class="product-price">$${note.price}</div>
                    <div class="product-seller">
                        <i class="fas fa-star" style="color: var(--warning);"></i>
                        ${note.rating}
                    </div>
                    <button class="buy-btn" onclick="downloadNotes(${note.id})">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += noteCard;
    });
}

function displayMyListings() {
    const container = document.getElementById('myListingsContainer');
    container.innerHTML = '';
    
    myListings.forEach(listing => {
        const listingItem = `
            <div class="listing-item">
                <div class="listing-image" style="background-image: url('${listing.image}')">
                    <i class="fas fa-box" style="color: white;"></i>
                </div>
                <div class="listing-details">
                    <div class="listing-title">${listing.title}</div>
                    <div class="listing-price">$${listing.price}</div>
                    <div class="listing-status ${listing.status === 'available' ? 'status-available' : 'status-sold'}">
                        ${listing.status === 'available' ? 'Available' : 'Sold'}
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 0.8rem; color: var(--dark-gray);">${listing.views} views</div>
                    <button class="btn btn-primary" style="margin-top: 0.5rem; padding: 0.5rem 1rem;" 
                            onclick="editListing(${listing.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += listingItem;
    });
}

function displaySavedItems() {
    const container = document.getElementById('savedItemsGrid');
    container.innerHTML = '';
    
    savedItems.forEach(item => {
        const savedCard = `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${item.image}')">
                    <div class="product-badge">Saved</div>
                </div>
                <div class="product-content">
                    <div class="product-title">${item.title}</div>
                    <div class="product-price">$${item.price}</div>
                    <div class="product-seller">
                        <i class="fas fa-calendar"></i>
                        Saved on ${item.savedDate}
                    </div>
                    <button class="buy-btn" onclick="initiatePurchase(${item.id})">
                        <i class="fas fa-shopping-cart"></i> Buy Now
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += savedCard;
    });
}

function displayNotifications() {
    const container = document.getElementById('notificationsList');
    container.innerHTML = '';
    
    notifications.forEach(notification => {
        const notificationCard = `
            <div class="notification-card ${notification.read ? 'read' : ''}" onclick="markNotificationRead(${notification.id})">
                <div class="notification-icon ${notification.type}">
                    <i class="${notification.icon}"></i>
                </div>
                <div class="notification-content">
                    <div class="notification-title">${notification.title}</div>
                    <div class="notification-message">${notification.message}</div>
                    <div class="notification-time">${notification.time}</div>
                </div>
            </div>
        `;
        container.innerHTML += notificationCard;
    });
}

function initiatePurchase(productId) {
    const product = sampleProducts.find(p => p.id === productId) || 
                   savedItems.find(p => p.id === productId);
    
    if (product) {
        currentProduct = product;
        const content = document.getElementById('purchaseContent');
        content.innerHTML = `
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div style="width: 80px; height: 80px; border-radius: 8px; background-image: url('${product.image}'); background-size: cover; background-position: center;"></div>
                <div>
                    <h3 style="margin-bottom: 0.5rem;">${product.title}</h3>
                    <div style="font-size: 1.2rem; font-weight: 600; color: var(--primary);">$${product.price}</div>
                    <div style="font-size: 0.9rem; color: var(--dark-gray); margin-top: 0.5rem;">Seller: ${product.seller ? product.seller.name : 'CampusConnect'}</div>
                </div>
            </div>
        `;
        showModal('purchaseModal');
    }
}

function completePurchase() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (currentProduct) {
        showToast(`Purchase completed! You bought ${currentProduct.title} for $${currentProduct.price}. Contact seller for pickup details.`);
        closeModal('purchaseModal');
        
        notifications.unshift({
            id: notifications.length + 1,
            type: "success",
            title: "Purchase Successful!",
            message: `You bought ${currentProduct.title} for $${currentProduct.price}`,
            time: "Just now",
            icon: "fas fa-shopping-bag",
            read: false
        });
        displayNotifications();
        updateNotificationBadge();
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function handleSellItem() {
    const title = document.getElementById('itemTitle').value;
    const category = document.getElementById('itemCategory').value;
    const price = document.getElementById('itemPrice').value;
    const condition = document.getElementById('itemCondition').value;
    const description = document.getElementById('itemDescription').value;
    const image = document.getElementById('itemImage').value || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

    if (!title || !category || !price || !condition || !description) {
        showToast('Please fill in all fields!');
        return;
    }

    const newProduct = {
        id: sampleProducts.length + 1,
        title: title,
        price: parseFloat(price),
        category: category,
        badge: "New",
        seller: { name: "You", avatar: "SP" },
        description: description,
        image: image
    };

    sampleProducts.unshift(newProduct);
    
    displayTrendingProducts();
    
    closeModal('sellModal');
    showToast('Your item has been listed successfully!');
    
    document.getElementById('sellForm').reset();
}

function handleProfileUpdate() {
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const major = document.getElementById('profileMajor').value;
    const year = document.getElementById('profileYear').value;
    const bio = document.getElementById('profileBio').value;

    document.querySelector('.profile-name').textContent = name;
    document.querySelector('.profile-role').textContent = major + ' Student';
    
    closeModal('editProfileModal');
    showToast('Profile updated successfully!');
}

function handleCreateEvent() {
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const location = document.getElementById('eventLocation').value;
    const description = document.getElementById('eventDescription').value;

    if (!title || !date || !time || !location || !description) {
        showToast('Please fill in all fields!');
        return;
    }

    const eventDate = new Date(date);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const day = eventDate.getDate();
    const month = months[eventDate.getMonth()];

    const newEvent = {
        id: sampleEvents.length + 1,
        title: title,
        day: day.toString(),
        month: month,
        location: location,
        time: time,
        description: description,
        registered: false
    };

    sampleEvents.unshift(newEvent);
    
    displayUpcomingEvents();
    displayAllEvents();
    
    closeModal('createEventModal');
    showToast('Event created successfully!');
    
    document.getElementById('eventForm').reset();
}

function downloadNotes(noteId) {
    const note = sampleNotes.find(n => n.id === noteId);
    if (note) {
        showToast(`Downloading "${note.title}" notes...`);
    }
}

function markNotificationRead(notificationId) {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification && !notification.read) {
        notification.read = true;
        displayNotifications();
        updateNotificationBadge();
    }
}

function markAllNotificationsRead() {
    notifications.forEach(notification => {
        notification.read = true;
    });
    displayNotifications();
    updateNotificationBadge();
    showToast('All notifications marked as read');
}

function updateNotificationBadge() {
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationBadge');
    const sidebarBadge = document.getElementById('sidebarNotificationBadge');
    
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'flex';
        sidebarBadge.textContent = unreadCount;
        sidebarBadge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
        sidebarBadge.style.display = 'none';
    }
}

function getProductIcon(category) {
    const icons = {
        'books': 'book',
        'notes': 'file-alt',
        'electronics': 'laptop',
        'clothing': 'tshirt'
    };
    return icons[category] || 'box';
}

function showProductDetail(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    if (product) {
        alert(`Product Details:\n\nTitle: ${product.title}\nPrice: $${product.price}\nCategory: ${product.category}\nDescription: ${product.description}\nSeller: ${product.seller.name}`);
    }
}

function showEventDetail(eventId) {
    const event = sampleEvents.find(e => e.id === eventId);
    if (event) {
        alert(`Event Details:\n\nTitle: ${event.title}\nDate: ${event.day} ${event.month}\nTime: ${event.time}\nLocation: ${event.location}\nDescription: ${event.description}`);
    }
}

function showNotesDetail(noteId) {
    const note = sampleNotes.find(n => n.id === noteId);
    if (note) {
        alert(`Notes Details:\n\nTitle: ${note.title}\nSubject: ${note.subject}\nChapters: ${note.chapters}\nPrice: $${note.price}\nRating: ${note.rating}/5.0`);
    }
}

function editListing(listingId) {
    const listing = myListings.find(l => l.id === listingId);
    if (listing) {
        showToast(`Editing listing: ${listing.title}`);
    }
}

function showUploadNotesModal() {
    showToast('Upload Notes feature coming soon!');
}

function showRatingsModal() {
    showToast('Ratings and reviews feature coming soon!');
}

function showSettingsModal() {
    showToast('Settings feature coming soon!');
}

function showFAQAnswer(faqId) {
    const answers = {
        1: "To sell an item:\n1. Click the 'Sell' button\n2. Fill in item details\n3. Set your price\n4. Upload photos\n5. Publish your listing",
        2: "To contact a seller:\n1. Click on the item\n2. Click 'Contact Seller'\n3. Send your message\n4. Wait for response",
        3: "We accept:\n- Cash (in-person)\n- Venmo\n- PayPal\n- Campus payment system",
        4: "To report an issue:\n1. Go to Help & Support\n2. Contact our team\n3. Describe the issue\n4. We'll respond within 24 hours"
    };
    alert(answers[faqId] || "FAQ answer not found.");
}

function contactSupport() {
    showToast('Support contact form coming soon!');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

document.addEventListener('click', function(event) {
    const searchResults = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
        searchResults.classList.remove('active');
    }
});
