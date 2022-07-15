const instagram_form = document.querySelector('#instagram_form');
const msgCreate = document.querySelector('.msg_create');

instagram_form.onsubmit = (e) => {
    e.preventDefault();

    const createForm = new FormData(e.target);
    const CreateFormData = Object.fromEntries(createForm.entries());
    const { postImage, postcontent, user_name, user_photo } = Object.fromEntries(createForm.entries());
    
    if (!user_name || !user_photo ) {
        msgCreate.innerHTML = alertSms('You must Field User Name and User Photo!')
    } else {
        addLsData('instagram_data', CreateFormData);
        displayData();
        msgCreate.innerHTML = alertSms('Success!', 'success ');
        e.target.reset()
    }
    
}


//instagram post display
const output = document.querySelector('#output');
const displayData = () => {

    const allData = readLsData('instagram_data');

    let displayList = '';

    if (!allData || allData.length <= 0) {
        displayList = ` <li class="my-2  list-group-item px-0 text-center">
                            <p>Post Not Found</p>
                        </li>`;
    } else {
        
    allData.map((items,index) => {
        displayList += `<li class="my-2  list-group-item px-0">
                                    <div class="d-flex justify-content-between align-items-center ">
                                      <div class="d-flex align-items-center justify-content-start ps-3 ">
                                        <span class="user_top_img">                
                                          <img style="width: 42px;height:42px" src="${items?.user_photo}" alt="user" class="border-1 border-dark rounded rounded-circle me-2">
                                         </span>
                                        <div class=" my-3 d-flex flex-column justify-content-start text-start">
                                          <p class="mb-0 user_name_top">${items?.user_name}</p>
                                        </div>
                                      </div>
                                    <div class="dropdown dropdown-menu-start pe-2">
                                      <button class="btn btn-secondary dropdown-toggle btn-group dropstart" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      <i class="fa-solid fa-ellipsis"></i>
                                      </button>
                                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">                    <li><a post_edit="${index}" class="dropdown-item edit" serial="0" href="#" data-bs-target="#edit_form" data-bs-toggle="modal">Edit</a></li>
                                          <li><a post_delate="${index}" class="dropdown-item delete" serial="0" href="#">Delete</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                  <div class="post_img_output">
                                      <p>${items?.postcontent}</p>
                                  </div>
                                  <div class="post_img_output">
                                      <img src="${items?.postImage}" alt="" class="py-2">
                                  </div>
                              
                                  
                                  <div class="lowerfield d-flex justify-content-between p-2">
                                  <div class=" d-flex justify-content-start">
                                      <div class="like"><button class="btn btn-outline-white border-0"><svg aria-label="Like" class="_ab6-" color="#000" fill="#000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></button></div>
                                      <div class="comment"><button class="btn btn-outline-white border-0"><svg aria-label="Comment" class="_ab6-" color="#000" fill="#000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></button></div>
                                      <div class="share"><button class="btn btn-outline-white border-0"><svg aria-label="Share Post" class="_ab6-" color="#000" fill="#000" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></button></div>
                                  </div>
                                      <div class="share"><button class="btn btn-outline-white border-0"><svg aria-label="Save" class="_ab6-" color="#000" fill="#000" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></button></div>
                                  </div>
                                  <div class=" comment_section my-2 px-3">
                                  <p>13,609 likes</p>
                                  <p>13,609 <span>..more</span></p>
                                  <p>view all 79 comments</p>
                                  <p>10 MINUTES AGO</p>
                                  <div class="d-flex justify-content-between">
                                  <i class="fa-regular fa-face-smile position-absolute my-2 mx-2"></i>
                                  <input class="w-75 rounded rounded-5 border px-5" placeholder="Add a comment...">
                                  <button class="btn btn-white text-primary">post</button>
                                  </div>
                                  </div>
                                  </li>`;
    });
    }
   

    output.innerHTML = displayList;

}

displayData();

//edit and delate
const instagram_Update = document.querySelector('#instagram_Update');
output.onclick = (e) => {
    //Edit post

    const postEdit = e.target.hasAttribute('post_edit');
    if (postEdit) {
        //get index
        const editIndex = e.target.getAttribute('post_edit');

        // read ls data
        const allPost = readLsData('instagram_data');

        //single edit data
        const singleEditData = allPost[editIndex];
        
        //edit data
        instagram_Update.innerHTML = `<label for="user_name">User name</label>
                      <input type="text" class="form-control border border-info bg-light my-3 " value="${singleEditData?.user_name}" name="user_name" id="user_name">
                      <input type="hidden" class="form-control border border-info bg-light my-3 " value="${editIndex}" name="index" id="user_name">
                      <label for="user_photo">User photo</label>
                      <input type="text" class="form-control border border-info bg-light my-3 " value="${singleEditData?.user_photo}" name="user_photo" id="user_photo">
                      <label for="">post Image</label>
                      <input type="text" class="form-control border border-info bg-light my-3 " value="${singleEditData?.postImage}" name="postImage" id="photo">
                      <label for="">post Image</label>
                      <textarea name="postcontent" id="" cols="30" rows="10">${singleEditData?.postcontent}</textarea>
                      <button type="submit" class="btn btn-secondary text-white w-100 my-3">save post</button>`;

         
    }

    //Delate Post
     const postDelate = e.target.hasAttribute('post_delate');
    if (postDelate) {
        //get index
        const delateIndex = e.target.getAttribute('post_delate');

        // read ls data
        let POstAll = readLsData('instagram_data');
        POstAll.splice(delateIndex, 1)
        
        //update all post data
        updateLsData('instagram_data', POstAll);
        displayData();
    }

}

//Edit Post Update
const msgEidt = document.querySelector('.msg_eidt');
instagram_Update.onsubmit = (e) => {
    e.preventDefault();
    //edit form data
    const editForm = new FormData(e.target);
    const EditData = Object.fromEntries(editForm.entries());
    const { user_name, user_photo, postcontent, postImage, index } = Object.fromEntries(editForm.entries());

    if (!user_name || !user_photo) {
        msgEidt.innerHTML = alertSms('You must Field User Name and User Photo!')
    } else {
         // read ls data
        let AllData = readLsData('instagram_data');
        AllData[index] = { user_name, user_photo, postcontent, postImage };

        //update all post data
        updateLsData('instagram_data', AllData);
        msgEidt.innerHTML = alertSms('Post Update Success!', 'success ');
        displayData();
    }

}
