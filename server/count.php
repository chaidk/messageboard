<?php





$count = fopen("count.txt", "r");
$txt = fread($count,filesize("count.txt"));
echo $txt;
fclose($count);
?>