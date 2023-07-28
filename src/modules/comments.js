const comments = () => {
  const reviews = document.getElementById('reviews');
  const commentsContainer = reviews.querySelector('.comments-container');
  const url = 'comments.json';

  let count = 0;

  const getDate = async (url) => {
    try {
      const response = await fetch(url);

      return await response.json();
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const renderComment = (comment, i) => {
    const review = ['review-green', 'review-gray', 'review-orange'];

    if (count > 2) count = 0;

    let item = document.createElement('div');
    item.classList.add('review-margin-bottom');
    item.classList.add('row');
    item.classList.add('comment-item');

    let avatar = `<div class="col-xs-3 col-sm-2">
      <div class="review-user">
        <img src="${comment.image ? comment.image : 'images/users/user.svg'}" alt="users" class="img-responsive avatar">
      </div>
    </div>`;

    item.innerHTML =
      `${i % 2 == 0 ? avatar : ''}
      <div class="col-xs-9 col-sm-9">
        <div class="review-inner ${review[count]} review-arrow ${i % 2 == 0 ? 'review-arrow-left' : 'review-arrow-right'}">
          <p class="text-normal">${comment.author}</p>
          <p>${comment.comment}</p>
        </div>
      </div>
      ${i % 2 == 0 ? '' : avatar}
      `;

    count++;
    return item;
  }

  const changeComment = (data, i) => {
    commentsContainer.children[0].remove();
    commentsContainer.append(renderComment(data[i + 1], i + 1))
  }

  const render = (data) => {
    commentsContainer.innerHTML = '';

    let index = 2;

    data.forEach((item, i) => {
      if (i < 3) {
        commentsContainer.append(renderComment(item, i))
      }
    });

    setInterval(() => {
      if (index === data.length - 1) index = -1;
      changeComment(data, index);
      index++;
    }, 20000)
  }

  setTimeout(() => {
    getDate(url).then(comments => {
      render(comments['comments']);
    })
  }, 1000)
}

export default comments;

