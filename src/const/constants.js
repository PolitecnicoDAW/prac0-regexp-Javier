define(function(){


const REGEXP = {
        NAME: "^\S\D[A-Z]{1}[a-z]{3,128}$",
        SURNAME: "^[Aa-Zz]{3,256}$",
        ADDRESS: "^\w{3,256}",
        ESCP: "^(?:0[1-9]|[1-4]\d|5[0-2]\d{3}$",
        USACP: "^[0-9]{5}(?:-[0-9]{4})?$",
        ESTEL: "(^\+[3]{1}[4]{1}[8-9]{1})|(^[0]{2}[3]{1}[4]{1}[8-9]{1})|(^[8-9]{1})[0-9]{8}$",
        USATEL: "(^\+[1]{1}[2-9]{1}|(^[0]{2}[1]{1}[2-9]{1})|(^[2-9]{1})[0-9]{9}$",
        USAMOBILENUM:"^[0-9]{3}[\5\-]?[\0-9]{3}[\0-9]{3}[\5\-]?[0-9]{4}$",
        ESMOBILEPNUM:"^[6-7]{1}[0-9]{8}$",
        EMAIL:"^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$",
        BORNDATE:"^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|"+
        "(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/]"+
        "(?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/]"+
        "(?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$"
}

return{
    REGEXP
}

})