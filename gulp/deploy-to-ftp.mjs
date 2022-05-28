import gulp from "gulp";
import ftp from "vinyl-ftp";

const connection = ftp.create({
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  parallel: 10,
  log: console.log
});

export default function deployToFtpProd() {
  const globs = ["dist/**"];

  // using base = '.' will transfer everything to destination correctly
  // turn off buffering in gulp.src for best performance

  return gulp
    .src(globs, {base: "dist", buffer: false})
    .pipe(connection.newer("/")) // only upload newer files
    .pipe(connection.dest("/"));
}
