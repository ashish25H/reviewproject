let presentUser = JSON.parse(localStorage.getItem('currentUser'));

async function renderUserInfoCard() {
    let response = await fetch('components/user-info-card/info-card.mustache');
    let template = await response.text();

    template = Mustache.render(template, presentUser);
    $('#section-container').html(template);

    $('#edit-btn').click(function() {
        $('.basice-info-edit').show();
        $('.basice-info').hide();
        $('#submit-basice-info-btn').show();
    });

    $("#work-info-edit").click(function() {
        $('.work-info').hide();
        $('.work-info-edit').show();
        $('#submit-work-info-btn').show();
    });

    $('#submit-basice-info-btn').click(function () {
        let name = $('#name').val();
        let gender = $('#gender').val();
        let dob = $('#dob').val();
        let maritalStatus = $('#martail-status').val();
        let location = $('#location').val();

        presentUser.name = name;
        presentUser.gender = gender;
        presentUser.dob = dob;
        presentUser.maritalStatus = maritalStatus;
        presentUser.location = location;

        localStorage.setItem('currentUser', JSON.stringify(presentUser));
        renderUserInfoCard();
    });

    $('#submit-work-info-btn').click(function(){
        let occupation = $('#occupation').val();
        let skills = $('#skills').val();
        let jobs = $('#jobs').val();

        presentUser.occupation = occupation;
        presentUser.skills = skills;
        presentUser.jobs = jobs;

        localStorage.setItem('currentUser', JSON.stringify(presentUser));
        renderUserInfoCard();
    });
}

export default renderUserInfoCard;