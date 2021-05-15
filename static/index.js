/* Exapand/Collapse with TAB key */
var expanded = false;
document.onkeydown=function(e){
  if(e.keyCode == 9) {
    expanded = !expanded;
    document.querySelectorAll("details").forEach(detail => detail.open = expanded);
    return false;
  }
}

/* Convert url in plaintext to clickable link */
<script src="https://cdn.jsdelivr.net/npm/linkifyjs@3.0.0-beta.3/dist/linkify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/linkifyjs@3.0.0-beta.3/dist/linkify-element.min.js"></script>
<script>document.querySelectorAll("article .details-content").forEach($ => linkifyElement($))</script>
