    const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "https://www.singulart.com/blog/wp-content/uploads/2023/09/Self-portrait-with-Straw-Hat-1887-88.jpg",
        comment: "It’s a dazzling display of brushwork and color that would give modern filters a run for their money..",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

    const postContainer = document.querySelector(".post-container");
    
    
    // 遍历 posts 数组
    posts.forEach(post => {
        // 克隆帖子容器模板
        const postTemplate = document.querySelector(".post").cloneNode(true);

        // 在模板中填充数据
        const userInfo = postTemplate.querySelector(".user-info");
        userInfo.querySelector(".user-avatar").src = post.avatar;
        userInfo.querySelector(".username").textContent = post.username;
        userInfo.querySelector(".location").textContent = post.location;

        postTemplate.querySelector(".post-image").src = post.post;
        postTemplate.querySelector(".commenter-content").textContent = post.comment;
        postTemplate.querySelector(".likes-data").textContent = `${post.likes} Likes`;

        // 将填充好数据的帖子模板插入到容器中
        postContainer.appendChild(postTemplate);
    });
    
    
    /* 使用innerHTML 
    posts.forEach(post => {
        const postTemplate = document.createElement("section");
        postTemplate.classList.add("post", "content-container");

        // 使用模板字符串填充帖子内容
        postTemplate.innerHTML = `
            <section class="user-info">
                <img class="user-avatar" src="${post.avatar}">
                <div class="user-text-info">
                    <p class="username accent-text">${post.username}</p>
                    <p class="location">${post.location}</p>
                </div>
            </section>
            <section class="img-section">
                <img class="post-image" src="${post.post}">
            </section>
            <section class="interaction-section">
                <section class="interaction-icons-area">
                    <img class="icons icon-like" src="images/icon-heart.png">
                    <img class="icons icon-comment" src="images/icon-comment.png">
                    <img class="icons icon-dm" src="images/icon-dm.png">
                </section>
                <section class="likes">
                    <p class="accent-text"><span class="likes-data">${post.likes}</span> likes</p>
                </section>
                <section class="comments">
                    <p><span class="commenter-name accent-text">${post.username}</span><span class="commenter-content">${post.comment}</span></p>      
                </section>
            </section>
        `;

        // 将填充好数据的帖子模板插入到容器中
        postContainer.appendChild(postTemplate);
    });
    */

