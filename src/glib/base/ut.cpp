/**
 * GLib - General C++ Library
 * 
 * Copyright (C) 2014 Jozef Stefan Institute
 *
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 * 
 */

/////////////////////////////////////////////////
// Notifications
void TNotify::OnNotifyFmt(const TNotifyType& Type, const char *FmtStr, ...) {
  char Bf[10*1024];
  va_list valist;
  va_start(valist, FmtStr);
  const int RetVal=vsnprintf(Bf, 10*1024-2, FmtStr, valist);
  va_end(valist);
  if (RetVal!=-1) { OnNotify(Type, TStr(Bf)); }
}

void TNotify::OnStatusFmt(const char *FmtStr, ...) {
  char Bf[10*1024];
  va_list valist;
  va_start(valist, FmtStr);
  const int RetVal=vsnprintf(Bf, 10*1024-2, FmtStr, valist);
  va_end(valist);
  if (RetVal!=-1) { OnStatus(TStr(Bf)); }
}

void TNotify::OnLnFmt(const char *FmtStr, ...) {
  char Bf[10*1024];
  va_list valist;
  va_start(valist, FmtStr);
  const int RetVal=vsnprintf(Bf, 10*1024-2, FmtStr, valist);
  va_end(valist);
  if (RetVal!=-1) { OnLn(TStr(Bf)); }
}

void TNotify::OnTxtFmt(const char *FmtStr, ...) {
  char Bf[10*1024];
  va_list valist;
  va_start(valist, FmtStr);
  const int RetVal=vsnprintf(Bf, 10*1024-2, FmtStr, valist);
  va_end(valist);
  if (RetVal!=-1) { OnTxt(TStr(Bf)); }
}

TStr TNotify::GetTypeStr(
 const TNotifyType& Type, const bool& Brief){
  static TStr InfoSStr="I"; static TStr InfoLStr="Information";
  static TStr WarnSStr="W"; static TStr WarnLStr="Warning";
  static TStr ErrSStr="E"; static TStr ErrLStr="Error";
  static TStr StatSStr=""; static TStr StatLStr="Status";
  switch (Type){
    case ntInfo: if (Brief){return InfoSStr;} else {return InfoLStr;}
    case ntWarn: if (Brief){return WarnSStr;} else {return WarnLStr;}
    case ntErr: if (Brief){return ErrSStr;} else {return ErrLStr;}
    case ntStat: if (Brief){return StatSStr;} else {return StatLStr;}
    default: Fail; return TStr();
  }
}

void TNotify::DfOnNotify(const TNotifyType& Type, const TStr& MsgStr){
  switch (Type){
    case ntInfo: InfoNotify(MsgStr); break;
    case ntWarn: WarnNotify(MsgStr); break;
    case ntErr: ErrNotify(MsgStr); break;
    case ntStat: StatNotify(MsgStr); break;
    default: Fail;
  }
}

const PNotify TNotify::NullNotify=TNullNotify::New();
const PNotify TNotify::StdNotify=TStdNotify::New();
const PNotify TNotify::StdErrNotify=TStdErrNotify::New();

/////////////////////////////////////////////////
// Standard-Notifier
void TStdNotify::OnNotify(const TNotifyType& Type, const TStr& MsgStr){
  if (Type==ntInfo){
    printf("%s\n", MsgStr.CStr());
  } else {
    TStr TypeStr=TNotify::GetTypeStr(Type, false);
    printf("%s: %s\n", TypeStr.CStr(), MsgStr.CStr());
  }
}

void TStdNotify::OnStatus(const TStr& MsgStr){
  printf("%s", MsgStr.CStr());
  // print '\n' if message not overlayed
  if ((!MsgStr.Empty())&&(MsgStr.LastCh()!='\r')){
    printf("\n");}
}

/////////////////////////////////////////////////
// Standard-Error-Notifier
void TStdErrNotify::OnNotify(const TNotifyType& Type, const TStr& MsgStr){
  if (Type==ntInfo){
    fprintf(stderr, "%s\n", MsgStr.CStr());
  } else {
    TStr TypeStr=TNotify::GetTypeStr(Type, false);
    fprintf(stderr, "%s: %s\n", TypeStr.CStr(), MsgStr.CStr());
  }
}

void TStdErrNotify::OnStatus(const TStr& MsgStr){
  fprintf(stderr, "%s", MsgStr.CStr());
  // print '\n' if message not overlayed
  if ((!MsgStr.Empty())&&(MsgStr.LastCh()!='\r')){
     fprintf(stderr, "\n");}
}

//////////////////////////////////////
// Log-Notify
void TLogNotify::OnStatus(const TStr& MsgStr) {
	TTm NowTm = TTm::GetCurLocTm();
	Notify->OnStatus(TStr::Fmt("[%s %s] %s", 
		NowTm.GetYMDDashStr().CStr(), 
		NowTm.GetHMSTColonDotStr(true, false).CStr(), 
		MsgStr.CStr()));
}

//////////////////////////////////////
// File-Notify
TFileNotify::TFileNotify(const TStr& _FileName, const bool& _AddTimeStamp, const bool& _SeparateFilesForEachDay, const bool& _FlushEachWrite)
	: FileName(_FileName), AddTimeStamp(_AddTimeStamp), SeparateFilesForEachDay(_SeparateFilesForEachDay), FlushEachWrite(_FlushEachWrite) {
	if (! SeparateFilesForEachDay)
		File = TFOut::New(_FileName, true);
	LastLogDate = "";
}

void TFileNotify::OpenNewFileForDate()
{
	LastLogDate = TTm::GetCurLocTm().GetWebLogDateStr();
	FileName.ChangeChAll('\\', '/');
	TStr Path, FName; FileName.SplitOnLastCh(Path, '/', FName);
	File = TFOut::New(Path + "/" + LastLogDate + " " + FName, true);
}

void TFileNotify::OnStatus(const TStr& MsgStr) {
	if (SeparateFilesForEachDay && TTm::GetCurLocTm().GetWebLogDateStr() != LastLogDate)
		OpenNewFileForDate();
	if (AddTimeStamp) {
		TTm NowTm = TTm::GetCurLocTm();
		if (SeparateFilesForEachDay) {
			File->PutStrFmt("[%s] ", NowTm.GetHMSTColonDotStr(true, false).CStr());
			File->PutStrLn(MsgStr);
		}
		else {
			File->PutStrFmt("[%s %s] ",
				NowTm.GetYMDDashStr().CStr(),
				NowTm.GetHMSTColonDotStr(true, false).CStr());
			File->PutStrLn(MsgStr);
		}
	}
	else
		File->PutStrLn(MsgStr);
	File->Flush();
}

void TFileNotify::OnNotify(const TNotifyType& Type, const TStr& MsgStr){
	if (SeparateFilesForEachDay && TTm::GetCurLocTm().GetWebLogDateStr() != LastLogDate)
		OpenNewFileForDate();
	TStr TypeStr = "";
	if (Type==ntInfo) TypeStr = "INFO";
	else if (Type == ntErr) TypeStr = "ERROR";
	else if (Type == ntWarn) TypeStr = "WARNING";
	else if (Type == ntStat) TypeStr = "STAT";

	if (AddTimeStamp) {
		TTm NowTm = TTm::GetCurLocTm();
		if (SeparateFilesForEachDay) 
			File->PutStrFmt("[%s] %s: %s\n", 
				NowTm.GetHMSTColonDotStr(true, false).CStr(), 
				TypeStr.CStr(),
				MsgStr.CStr());
		else
			File->PutStrFmt("[%s %s] %s: %s\n", 
				NowTm.GetYMDDashStr().CStr(), 
				NowTm.GetHMSTColonDotStr(true, false).CStr(), 
				TypeStr.CStr(),
				MsgStr.CStr());
	}
	else 
		File->PutStrFmt("%s: %s\n", TypeStr.CStr(), MsgStr.CStr());
	if (FlushEachWrite)
		File->Flush();
}

void TStrNotify::OnNotify(const TNotifyType& Type, const TStr& MsgStr)
{
	if (Type == ntInfo) {
		Log += MsgStr + "\n";
	}
	else {
		TStr TypeStr = TNotify::GetTypeStr(Type, false);
		Log += TypeStr + " " + MsgStr + "\n";
	}
}

void TStrNotify::OnStatus(const TStr& MsgStr)
{
	Log += MsgStr;
	// print '\n' if message not overlayed
	if ((!MsgStr.Empty()) && (MsgStr.LastCh() != '\r'))
		Log += "\n";
}

/////////////////////////////////////////////////
// Exception
TExcept::TOnExceptF TExcept::OnExceptF=NULL;
