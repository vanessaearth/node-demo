var fs=require('fs');
function copy(src,dst){
	//小文件读取
	//fs.writeFileSync(dst,fs.readFileSync(src));
	//大文件读取
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv){
	copy(argv[0],argv[1]);
}
var a=['./util/11.downloading','util/11_copy.downloading']
main(a);