virtualbox - attach / detach USB
-------------------
alias prompt11='echo https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html'
alias virtualbox0='VBoxManage controlvm "El Capitan 3" usbdetach $id'
alias virtualbox1='VBoxManage controlvm "El Capitan 3" usbattach $id'
virtualbox3(){
#VBoxManage | grep usb
#VBoxManage list usbhost |grep USB
#VBoxManage list vms
VBoxManage list usbhost | grep Apple -B 6
}


.bashrc
------------
source $HOME/git-completion.bash

export CLICOLOR=1

export LSCOLORS=ExFxBxDxCxegedabagacad

export PS1="\[\033[36m\]\t\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\$(parse_git_branch)$ "

parse_git_branch() {

git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
