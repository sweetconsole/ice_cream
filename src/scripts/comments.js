const commentsCounter = document.getElementById("commentsCounter").children;
const commentPhoto = document.getElementById("commentPhoto");
const commentText = document.getElementById("commentText");
const commentAuthor = document.getElementById("commentAuthor");

const commentsImage = document.getElementById("commentsImage");
const timeUpdateCommentsImage = 15
let commentsImageId = 1

const comments = [
    {
        photo: "comments_author_1.webp",
        text: "Every day we come to you with friends after classes in college. We love your ice cream and casual atmosphere!",
        author: "Bryan, New-York",
    },
    {
        photo: "comments_author_2.webp",
        text: "Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!",
        author: "Diana, Chicago",
    },{
        photo: "comments_author_3.webp",
        text: "I love eating popsicles on a hot day. Yours is always delicious. I recommend your cafe to everyone I know.",
        author: "Sam, Los Angeles",
    },
]

function changeComment(id, element) {
    for (let count = 0; count < commentsCounter.length; count++) {
        if (count === id) {
            element.classList.add("comments__count_circle-active");
        } else {
            commentsCounter[count].classList = "comments__count_circle"
        }
    }

    commentPhoto.src = `./image/${comments[id].photo}`
    commentText.innerText = comments[id].text
    commentAuthor.innerText = comments[id].author
}

function changeCommentImage() {
    if (commentsImageId === 3) {
        commentsImageId = 1

    } else {
        commentsImageId += 1
    }

    if (commentsImageId === 1) {
        commentsImage.classList.remove(`comments__image-3`)
    } else {
        commentsImage.classList.remove(`comments__image${commentsImageId-1}`)
    }

    commentsImage.classList.add(`comments__image-${commentsImageId}`)
}

window.onload = function() {
    setInterval(changeCommentImage, timeUpdateCommentsImage*1000)
}