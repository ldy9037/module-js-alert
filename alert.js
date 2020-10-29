let alertNodeCount = 0;

function showAlert(strContent, strAlertType){
    const nowAlertNode = alertNodeCount;

    let html = '';
    html += `<div class="text-${strAlertType} border-2 border-${strAlertType} rounded relative w-full cursor-pointer my-2 animate__animated animate__fadeInUp alert-node-${alertNodeCount}" onclick="removeAlertNode(${nowAlertNode})" style="max-width: 250px;background-color: ${alertBackgroundColor()}">`;
    html += `<span class="absolute" style="top:5px;right:10px"><i class="icon-line-awesome-close"></i></span>`;
    html += `<div class="py-2 px-4">`;
    html += `<div class="font-bold text-xl">`;
    html += `<i class="${alertTitleIcon()}"></i> ${alertTitleMessage()}`;
    html += `</div>`;
    html += `<div class="mt-2">${strContent}</div>`;
    html += `</div>`;
    html += `</div>`;

    $(".alert-container").append(html);

    setTimeout(function() {
        removeAlertNode(nowAlertNode)
    }, 5000);

    alertNodeCount++;

    function alertBackgroundColor(){
        return (isSuccess()) ? '#E9FAF6' : '#FCEEED';
    }

    function alertTitleIcon(){
        return (isSuccess()) ? 'icon-material-outline-check-circle' : 'icon-line-awesome-warning';
    }

    function alertTitleMessage(){
        return (isSuccess()) ? '성공!' : '앗!';
    }

    function isSuccess(){
        return (strAlertType == 'success');
    }
}

function removeAlertNode(intNowAlertNode){
    $( `.alert-node-${intNowAlertNode}` ).removeClass('animate__fadeInUp').addClass('animate__fadeOutUp');

    setTimeout(function(){
        $( `.alert-node-${intNowAlertNode}` ).remove();
    },1000)
}


/*
showAlert('성공적으로 반영되었습니다!.', 'success')
showAlert('올바른 방법으로 이용해 주세요.', 'danger')
* */
