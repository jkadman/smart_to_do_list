// Client facing scripts here
$(() => {
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty(); //empty an element

      for(const user of response.users) {
        $(`<li class="user">`).text(user.name).appendTo($usersList);
      } //reload all users
    });
  });
});
