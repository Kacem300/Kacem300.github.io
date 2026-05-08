const projectsData = [
    {
        id: 'the-valley',
        name: 'The Valley',
        description: 'An e-commerce platform featuring a comprehensive admin dashboard for product and user management, alongside a user-friendly interface for browsing, purchasing, and reviewing products. Built with Angular frontend and Spring Boot backend.',
        basePath: './assets/The Valley project/',
        images: [
            { path: 'Admin/AddProducts.png', label: 'Admin - Add Products' },
            { path: 'Admin/ManageCategories&groups.png', label: 'Admin - Categories Management' },
            { path: 'Admin/ManageCategories&groups2.png', label: 'Admin - Categories Management (Alternative View)' },
            { path: 'Admin/ManageProducts.png', label: 'Admin - Product Management' },
            { path: 'Admin/ManageUsers.png', label: 'Admin - User Management' },
            { path: 'Admin/ManageContacts.png', label: 'Admin - Contact Management' },
            { path: 'Admin/MyOrdersAdmin.png', label: 'Admin - Orders' },
            { path: 'Admin/image2.png', label: 'Admin - Statistics' },
            { path: 'User/Dashboard.png', label: 'User - Dashboard' },
            { path: 'User/ProductDetails.png', label: 'User - Product Details' },
            { path: 'User/Cart.png', label: 'User - Shopping Cart' },
            { path: 'User/Gallery.png', label: 'User - Gallery View' },
            { path: 'User/BestSeller.png', label: 'User - Best Sellers' },
            { path: 'User/TopRated.png', label: 'User - Top Rated' },
            { path: 'User/UserProfile.png', label: 'User - Profile' },
            { path: 'User/Login.png', label: 'User - Login' },
            { path: 'User/register.png', label: 'User - Registration' },
            { path: 'User/CommentSection.png', label: 'User - Reviews' },
            { path: 'User/Contact.png', label: 'User - Contact' }
        ]
    },
    {
        id: 'naksha',
        name: 'Naksha',
        description: 'A modern e-commerce website showcasing products with an intuitive shopping experience. Features product listing, detailed product views, shopping cart management, and customer information pages. Built with responsive design and smooth user interactions.',
        basePath: './assets/Naksha/',
        images: [
            { path: 'front1.png', label: 'Homepage' },
            { path: 'products.png', label: 'Product Listing' },
            { path: 'productdetails.png', label: 'Product Details' },
            { path: 'product2.png', label: 'Alternative Product View' },
            { path: 'cartplein.png', label: 'Full Cart' },
            { path: 'cartvide.png', label: 'Empty Cart' },
            { path: 'info.png', label: 'Information Page' },
            { path: 'contact.png', label: 'Contact Us' }
        ]
    },
    {
        id: 'support-management',
        name: 'Support Management Aftercode',
        description: 'A cross-platform support ticketing system with web dashboard and mobile app. Enables users to create, track, and manage support tickets with priorities, categories, and real-time notifications. Features include knowledge base, user feedback, and comprehensive ticket history.',
        basePath: './assets/Support-management-Aftercode/',
        images: [
            { path: 'Screenshot 2025-10-17 111531.png', label: 'Dashboard Overview' },
            { path: 'Screenshot 2025-10-17 111546.png', label: 'Dashboard Alternative' },
            { path: 'Notifications (1).png', label: 'Notifications System' },
            { path: 'Screenshot_2025-10-17-11-09-03-063_com.example.support_management.jpg', label: 'Mobile - Login' },
            { path: 'Screenshot_2025-10-17-11-09-06-937_com.example.support_management.jpg', label: 'Mobile - Splash Screen' },
            { path: 'Screenshot_2025-10-17-11-09-47-004_com.example.support_management.jpg', label: 'Mobile - Sidebar' },
            { path: 'Screenshot_2025-10-17-11-09-53-563_com.example.support_management.jpg', label: 'Mobile - Support Tickets' },
            { path: 'Screenshot_2025-10-17-11-09-57-852_com.example.support_management.jpg', label: 'Mobile - Ticket Creation' },
            { path: 'Screenshot_2025-10-17-11-10-02-799_com.example.support_management.jpg', label: 'Mobile - Category Selection' },
            { path: 'Screenshot_2025-10-17-11-10-08-145_com.example.support_management.jpg', label: 'Mobile - Priorities' },
            { path: 'Screenshot_2025-10-17-11-10-16-067_com.example.support_management.jpg', label: 'Mobile - Ticket Details' },
            { path: 'Screenshot_2025-10-17-11-10-20-564_com.example.support_management.jpg', label: 'Mobile - Ticket Info' },
            { path: 'Screenshot_2025-10-17-11-10-46-601_com.example.support_management.jpg', label: 'Mobile - Attachments' },
            { path: 'Screenshot_2025-10-17-11-10-50-340_com.example.support_management.jpg', label: 'Mobile - Image Preview' },
            { path: 'Screenshot_2025-10-17-11-11-00-998_com.example.support_management.jpg', label: 'Mobile - User Feedback' },
            { path: 'Screenshot_2025-10-17-11-11-05-083_com.example.support_management.jpg', label: 'Mobile - Status Update' },
            { path: 'Screenshot_2025-10-17-11-11-09-391_com.example.support_management.jpg', label: 'Mobile - History' },
            { path: 'Screenshot_2025-10-17-11-11-12-636_com.example.support_management.jpg', label: 'Mobile - Timeline' },
            { path: 'Screenshot_2025-10-17-11-11-18-716_com.example.support_management.jpg', label: 'Mobile - Comments' },
            { path: 'Screenshot_2025-10-17-11-11-23-089_com.example.support_management.jpg', label: 'Mobile - Chat Interface' },
            { path: 'Screenshot_2025-10-17-11-11-42-779_com.example.support_management.jpg', label: 'Mobile - Knowledge Base' },
            { path: 'Screenshot_2025-10-17-11-13-26-572_com.example.support_management.jpg', label: 'Mobile - Profile Settings' },
            { path: 'Screenshot_2025-10-17-11-13-31-209_com.example.support_management.jpg', label: 'Mobile - Security' },
            { path: 'Screenshot_2025-10-17-11-14-21-861_com.example.support_management.jpg', label: 'Mobile - Notifications' },
            { path: 'Screenshot_2025-10-17-11-14-34-071_com.google.android.permissioncontroller.jpg', label: 'Mobile - Permissions' },
            { path: 'Screenshot_2025-10-17-11-14-51-594_com.example.support_management.jpg', label: 'Mobile - Help Center' }
        ]
    },
    {
        id: 'cloud-automation',
        name: 'Cloud Automation',
        description: 'A cloud automation project still in progress. Built a comprehensive infrastructure with 1 controller and 4 compute nodes plus 1 storage node. Created instances and deployed Ansible playbooks to automate Docker, Kubernetes, Grafana, and Prometheus installation. Developed a website and currently deploying it across the infrastructure.',
        basePath: './assets/cloud automation/',
        images: [
            { path: 'image.png', label: 'Cloud Automation Overview' }
        ]
    },
    {
        id: 'security-kali',
        name: 'Security Kali - pfSense',
        description: 'A comprehensive security project demonstrating network security configuration and firewall management using pfSense. Features firewall rules, network routing, VPN setup, and advanced security policies for enterprise-level network protection.',
        basePath: './assets/Security Kali project/',
        images: [
            { path: 'Pfsense.png', label: 'pfSense Dashboard' },
            { path: 'Pfsense1.png', label: 'Firewall Configuration' },
            { path: 'Pfsense2.png', label: 'Network Routing' },
            { path: 'Pfsense3.png', label: 'System Settings' },
            { path: 'Pfsense4.png', label: 'Firewall Rules' },
            { path: 'pfesense5.png', label: 'Security Policies' },
            { path: 'pfsense6.png', label: 'Network Interfaces' },
            { path: 'pfsense7.png', label: 'System Monitoring' },
            { path: 'pfsense8.png', label: 'Advanced Configuration' },
            { path: 'pfsense9.png', label: 'Network Monitoring' },
            { path: 'pfsense10.png', label: 'Security Dashboard' }
        ]
    }
];

let currentImages = [];
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const galleryRoot = document.getElementById('gallery-root');
    const loader = document.getElementById('loader');

    // Get project filter from URL hash (e.g., projects.html#the-valley)
    const getProjectFilter = () => {
        const hash = window.location.hash.substring(1);
        return hash || null;
    };

    // Generate Gallery Content
    const generateGallery = () => {
        loader.style.display = 'none';
        galleryRoot.innerHTML = ''; // Clear existing content
        
        const filter = getProjectFilter();
        const filteredProjects = filter 
            ? projectsData.filter(p => p.id === filter) 
            : projectsData;

        if (filteredProjects.length === 0) {
            galleryRoot.innerHTML = '<div style="text-align:center; padding: 2rem;"><h2>Project not found</h2><a href="projects.html" class="back-btn">View All Projects</a></div>';
            return;
        }

        filteredProjects.forEach(project => {
            const section = document.createElement('section');
            section.className = 'project-section';
            section.id = project.id;

            const h2 = document.createElement('h2');
            h2.textContent = project.name;
            section.appendChild(h2);

            // Add project description
            if (project.description) {
                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'project-description';
                descriptionDiv.textContent = project.description;
                section.appendChild(descriptionDiv);
            }

            const grid = document.createElement('div');
            grid.className = 'image-grid';

            project.images.forEach((img, idx) => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                
                const fullPath = project.basePath + img.path;
                
                // Use lazy loading
                const imageElement = document.createElement('img');
                imageElement.dataset.src = fullPath;
                imageElement.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Placeholder
                imageElement.alt = img.label;
                imageElement.className = 'lazy-load';
                imageElement.loading = 'lazy';
                
                // Fallback for missing images
                imageElement.onerror = () => {
                    imageElement.src = 'https://via.placeholder.com/400x225?text=Image+Not+Found';
                };

                const label = document.createElement('div');
                label.className = 'image-label';
                label.textContent = img.label;

                item.appendChild(imageElement);
                item.appendChild(label);
                
                item.addEventListener('click', () => openLightbox(project.images, idx, project.basePath));
                
                grid.appendChild(item);
            });

            section.appendChild(grid);
            galleryRoot.appendChild(section);
        });

        // Initialize lazy loading
        initLazyLoading();
    };

    const initLazyLoading = () => {
        const lazyImages = document.querySelectorAll('.lazy-load');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove('lazy-load');
                        imageObserver.unobserve(image);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    };

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const openLightbox = (images, index, basePath) => {
        currentImages = images.map(img => ({ ...img, fullPath: basePath + img.path }));
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const updateLightbox = () => {
        const img = currentImages[currentIndex];
        lightboxImg.src = img.fullPath;
        lightboxCaption.textContent = img.label;
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeLightbox);
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightbox();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightbox();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });

    // Handle hash change for navigation
    window.addEventListener('hashchange', generateGallery);

    // Start generating
    setTimeout(generateGallery, 300);
});
