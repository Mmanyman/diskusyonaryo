function toggleReplyForm(button) {
    $(button).closest('.comment').find('.reply-form').toggleClass('d-none');
}

function addReply(button) {
    const replyText = $(button).siblings('textarea').val();
    if (replyText) {
        const replyHtml = `
            <div class="comment reply">
                <div class="d-flex justify-content-between">
                    <strong>You</strong>
                    <button class="btn btn-link" onclick="toggleReplyForm(this)">Reply</button>
                </div>
                <p>${replyText}</p>
                <div class="reply-form d-none">
                    <textarea class="form-control" placeholder="Add a reply..."></textarea>
                    <button class="btn btn-primary mt-2" onclick="addReply(this)">Submit</button>
                </div>
                <div class="replies"></div>
            </div>
        `;
        $(button).closest('.comment').find('.replies').append(replyHtml);
        $(button).siblings('textarea').val(''); // Clear the textarea
        $(button).closest('.reply-form').addClass('d-none'); // Hide reply form
    }
}

function addComment() {
    const newCommentText = $('#new-comment').val();
    if (newCommentText) {
        const commentHtml = `
            <div class="comment">
                <div class="d-flex justify-content-between">
                    <strong>You</strong>
                    <button class="btn btn-link" onclick="toggleReplyForm(this)">Reply</button>
                </div>
                <p>${newCommentText}</p>
                <div class="reply-form d-none">
                    <textarea class="form-control" placeholder="Add a reply..."></textarea>
                    <button class="btn btn-primary mt-2" onclick="addReply(this)">Submit</button>
                </div>
                <div class="replies"></div>
            </div>
        `;
        $('#comment-section').append(commentHtml);
        $('#new-comment').val(''); // Clear the textarea
    }
}