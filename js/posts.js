// Load and display posts
async function loadPosts(lang = 'en') {
    try {
        const response = await fetch('/data/posts.json');
        const data = await response.json();
        const postsContainer = document.getElementById('posts-container');
        
        if (!postsContainer) return;
        
        postsContainer.innerHTML = data.posts.map(post => `
            <div class="post-card" onclick="window.location.href='/${lang}/post.html?id=${post.id}'">
                <img src="${post.image}" alt="${post.title[lang]}" class="post-image">
                <div class="post-content">
                    <div class="post-date">${formatDate(post.date, lang)}</div>
                    <h3 class="post-title">${post.title[lang]}</h3>
                    <p class="post-excerpt">${post.excerpt[lang]}</p>
                    <a href="/${lang}/post.html?id=${post.id}" class="post-read-more">
                        ${lang === 'ar' ? 'اقرأ المزيد' : 'Read More'} →
                    </a>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Format date
function formatDate(dateStr, lang) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', options);
}

// Load single post
async function loadPost(lang = 'en') {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        window.location.href = `/${lang}/index.html`;
        return;
    }
    
    try {
        const response = await fetch('/data/posts.json');
        const data = await response.json();
        const post = data.posts.find(p => p.id === postId);
        
        if (!post) {
            window.location.href = `/${lang}/index.html`;
            return;
        }
        
        document.title = `${post.title[lang]} - Lunixa Cloud Solutions`;
        
        const postDetail = document.getElementById('post-detail');
        if (postDetail) {
            postDetail.innerHTML = `
                <a href="/${lang}/index.html#posts" class="back-to-posts">
                    ← ${lang === 'ar' ? 'العودة إلى الأخبار' : 'Back to News'}
                </a>
                <div class="post-detail-header">
                    <h1 class="post-detail-title">${post.title[lang]}</h1>
                    <div class="post-detail-meta">
                        <span>${formatDate(post.date, lang)}</span>
                        <span>•</span>
                        <span>${post.author[lang]}</span>
                    </div>
                </div>
                <img src="${post.image}" alt="${post.title[lang]}" class="post-detail-image">
                <div class="post-detail-content">
                    ${post.content[lang]}
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading post:', error);
    }
}
