function getHistory()
{
    return document.getElementById('history_text').innerText;
}
function printHistory(num)
{
    document.getElementById('history_text').innerText = num;
}
function getOutput()
{
    return document.getElementById('output_text').innerText;
}
function printOutput(num)
{
    if(num=="")
    {
        document.getElementById('output_text').innerText = num;

    }
    else
    {
        document.getElementById('output_text').innerText = formatNumber(num);
    }
}
function formatNumber(num)
{
    if(num=="-")
    {
        return '';
    }
    var a = Number(num);
    return a.toLocaleString('en');
}
function unFormatNumber(num)
{
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click', function()
    {
        if(this.id=="clear")
        {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace")
        {
            var output = unFormatNumber(getOutput()).toString();
            if(output)
            {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else
        {
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!="")
            {
                if(isNaN(history[history.length-1]))
                {
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!="")
            {
                output = output==""?output:unFormatNumber(output);
                history = history+output;
                if(this.id=="=")
                {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else
                {
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    });
}

var number  = document.getElementsByClassName('number');
for(i=0;i<number.length;i++)
{
    number[i].addEventListener('click', function()
    {
        var output = unFormatNumber(getOutput());
        if(output!=NaN)
        {
            output = output+this.id;
            printOutput(output);
        }
    })
}

/*var numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        var output = unFormatNumber(getOutput());
        if(output!=NaN)
        {
            output = output+number.id;
            printOutput(output);
        }
    })
    
});*/