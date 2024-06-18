function complete(){
    const userName = prompt('你的名字：');
    var send = true;
    var ans = [];
    const ans1 = checkItems('whetherCome');
    const ans2 = document.getElementById('q2_ans1');
    const ans3 = checkItems('howToGift');
    const ans4 = document.getElementById('q4_ans1');
    const ans5 = document.getElementById('q5_ans1');
    if (ans1 != 0){
        ans.push(ans1);
    }else{
        alert('请检查问题一是否完成填写！');
        send = false;
    }
    if (ans2.value){
        ans.push(ans2.value);
    }else{
        alert('请检查问题二是否完成填写！');
        send = false;
    }
    if (ans3 != 0){
        ans.push(ans3);
    }else{
        alert('请检查问题三是否完成填写！'); 
        send = false;
    }
    if (ans4.value){
        ans.push(ans4.value);
    }else{
        alert('请检查问题四是否完成填写！');
        send = false;
    }
    if (send){
        ans.push(ans5.value);
        $.post('https://apis.tianapi.com/robot/index',
            {
                key: '868ffe977d3b445b541e7e28acb51e41',
                question: 'Q1:' + ans[0] + ' Q2' + ans[1] + ' Q3:' + ans[2] + ' Q4:' + ans[3] + ' Q5:' + ans[4]+ ' Name:' + userName,
                restype: '0'
            }
        )
    }
}

function checkItems(itemName){
    var item = document.getElementsByName(itemName);
    for(var i = 0 ; i < item.length ; i++){
        if(item[i].checked){
            return item[i].value;
        }
    }
    return 0;
}