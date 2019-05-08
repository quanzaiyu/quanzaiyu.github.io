(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{758:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes-核心概念-任务与定时任务-job、cron"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念-任务与定时任务-job、cron","aria-hidden":"true"}},[t._v("#")]),t._v(" Kubernetes 核心概念 - 任务与定时任务 (Job、Cron)")]),t._v(" "),e("h2",{attrs:{id:"任务-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务-job","aria-hidden":"true"}},[t._v("#")]),t._v(" 任务 (Job)")]),t._v(" "),e("p",[t._v("Job负责批处理任务，即仅执行一次的任务，它保证批处理任务的一个或多个Pod成功结束。")]),t._v(" "),e("h3",{attrs:{id:"job-spec格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job-spec格式","aria-hidden":"true"}},[t._v("#")]),t._v(" Job Spec格式")]),t._v(" "),e("ul",[e("li",[t._v("spec.template格式同Pod")]),t._v(" "),e("li",[t._v("RestartPolicy仅支持Never或OnFailure")]),t._v(" "),e("li",[t._v("单个Pod时，默认Pod成功运行后Job即结束")]),t._v(" "),e("li",[e("code",[t._v(".spec.completions")]),t._v("标志Job结束需要成功运行的Pod个数，默认为1")]),t._v(" "),e("li",[e("code",[t._v(".spec.parallelism")]),t._v("标志并行运行的Pod的个数，默认为1")]),t._v(" "),e("li",[e("code",[t._v("spec.activeDeadlineSeconds")]),t._v("标志失败Pod的重试最大时间，超过这个时间不会继续重试")])]),t._v(" "),e("p",[t._v("一个简单的例子：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" batch/v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Job\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pi\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pi\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pi\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" perl\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"perl"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Mbignum=bpi"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-wle"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"print bpi(2000)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restartPolicy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Never\n")])])]),e("p",[t._v("测试")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ kubectl create -f ./job.yaml\njob "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pi"')]),t._v(" created\n$ pods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl get pods --selector"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("job-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pi --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jsonpath"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("metadata.name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n$ kubectl logs "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pods")]),t._v(" -n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\n3.141592653589793238462643383279502"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("任务运行完后, 任务和pod呈现 Completed 状态")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl get po -n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\nNAME                     READY   STATUS      RESTARTS   AGE\npi-7wbk4                 0/1     Completed   0          3m28s\n")])])]),e("h3",{attrs:{id:"bare-pods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bare-pods","aria-hidden":"true"}},[t._v("#")]),t._v(" Bare Pods")]),t._v(" "),e("p",[t._v("所谓Bare Pods是指直接用PodSpec来创建的Pod（即不在ReplicaSets或者ReplicationController的管理之下的Pods）。这些Pod在Node重启后不会自动重启，但Job则会创建新的Pod继续任务。所以，推荐使用Job来替代Bare Pods，即便是应用只需要一个Pod。")]),t._v(" "),e("h2",{attrs:{id:"定时任务-cronjob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时任务-cronjob","aria-hidden":"true"}},[t._v("#")]),t._v(" 定时任务 (CronJob)")]),t._v(" "),e("p",[e("em",[t._v("Cron Job")]),t._v(" 管理基于时间的 "),e("a",{attrs:{href:"https://kubernetes.io/docs/concepts/jobs/run-to-completion-finite-workloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Job"),e("OutboundLink")],1),t._v("，即：")]),t._v(" "),e("ul",[e("li",[t._v("在给定时间点只运行一次")]),t._v(" "),e("li",[t._v("周期性地在给定时间点运行")])]),t._v(" "),e("p",[t._v("一个 CronJob 对象类似于 "),e("em",[t._v("crontab")]),t._v(" （cron table）文件中的一行。它根据指定的预定计划周期性地运行一个 Job，格式可以参考 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cron"),e("OutboundLink")],1),t._v(" 。")]),t._v(" "),e("h3",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),e("p",[t._v("当前使用的 Kubernetes 集群，版本 >= 1.8（对 CronJob）。对于先前版本的集群，版本 < 1.8，启动 API Server（参考 "),e("a",{attrs:{href:"https://kubernetes.io/docs/admin/cluster-management/#turn-on-or-off-an-api-version-for-your-cluster",target:"_blank",rel:"noopener noreferrer"}},[t._v("为集群开启或关闭 API 版本"),e("OutboundLink")],1),t._v(" 获取更多信息）时，通过传递选项 "),e("code",[t._v("--runtime-config=batch/v2alpha1=true")]),t._v(" 可以开启 batch/v2alpha1 API。")]),t._v(" "),e("p",[t._v("典型的用法如下所示：")]),t._v(" "),e("ul",[e("li",[t._v("在给定的时间点调度 Job 运行")]),t._v(" "),e("li",[t._v("创建周期性运行的 Job，例如：数据库备份、发送邮件。")])]),t._v(" "),e("h3",{attrs:{id:"cronjob-spec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cronjob-spec","aria-hidden":"true"}},[t._v("#")]),t._v(" CronJob Spec")]),t._v(" "),e("ul",[e("li",[e("code",[t._v(".spec.schedule")]),t._v("："),e("strong",[t._v("调度")]),t._v("，必需字段，指定任务运行周期，格式同 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cron"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("code",[t._v(".spec.jobTemplate")]),t._v("："),e("strong",[t._v("Job 模板")]),t._v("，必需字段，指定需要运行的任务，格式同 "),e("a",{attrs:{href:"https://jimmysong.io/kubernetes-handbook/concepts/job.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Job"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("code",[t._v(".spec.startingDeadlineSeconds")]),t._v(" ："),e("strong",[t._v("启动 Job 的期限（秒级别）")]),t._v("，该字段是可选的。如果因为任何原因而错过了被调度的时间，那么错过执行时间的 Job 将被认为是失败的。如果没有指定，则没有期限")]),t._v(" "),e("li",[e("code",[t._v(".spec.concurrencyPolicy")]),t._v("："),e("strong",[t._v("并发策略")]),t._v("，该字段也是可选的。它指定了如何处理被 Cron Job 创建的 Job 的并发执行。只允许指定下面策略中的一种：\n"),e("ul",[e("li",[e("code",[t._v("Allow")]),t._v("（默认）：允许并发运行 Job")]),t._v(" "),e("li",[e("code",[t._v("Forbid")]),t._v("：禁止并发运行，如果前一个还没有完成，则直接跳过下一个")]),t._v(" "),e("li",[e("code",[t._v("Replace")]),t._v("：取消当前正在运行的 Job，用一个新的来替换\n注意，当前策略只能应用于同一个 Cron Job 创建的 Job。如果存在多个 Cron Job，它们创建的 Job 之间总是允许并发运行。")])])]),t._v(" "),e("li",[e("code",[t._v(".spec.suspend")]),t._v(" ："),e("strong",[t._v("挂起")]),t._v("，该字段也是可选的。如果设置为 "),e("code",[t._v("true")]),t._v("，后续所有执行都会被挂起。它对已经开始执行的 Job 不起作用。默认值为 "),e("code",[t._v("false")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v(".spec.successfulJobsHistoryLimit")]),t._v(" 和 "),e("code",[t._v(".spec.failedJobsHistoryLimit")]),t._v(" ："),e("strong",[t._v("历史限制")]),t._v("，是可选的字段。它们指定了可以保留多少完成和失败的 Job。\n默认情况下，它们分别设置为 "),e("code",[t._v("3")]),t._v(" 和 "),e("code",[t._v("1")]),t._v("。设置限制的值为 "),e("code",[t._v("0")]),t._v("，相关类型的 Job 完成后将不会被保留。")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" batch/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CronJob\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schedule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/1 * * * *"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobTemplate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /bin/sh\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" date; echo Hello from the Kubernetes cluster\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restartPolicy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OnFailure\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ kubectl create -f cronjob.yaml\ncronjob "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" created\n")])])]),e("p",[t._v("当然，也可以用 "),e("code",[t._v("kubectl run")]),t._v(" 来创建一个CronJob：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ kubectl run hello --schedule"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/1 * * * *"')]),t._v(" --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OnFailure --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("busybox -- /bin/sh -c "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date; echo Hello from the Kubernetes cluster"')]),t._v("\n$ kubectl get cronjob\nNAME      SCHEDULE      SUSPEND   ACTIVE    LAST-SCHEDULE\nhello     */1 * * * *   False     0         "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ kubectl get "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("jobs")]),t._v("\nNAME               DESIRED   SUCCESSFUL   AGE\nhello-1202039034   1         1            49s\n$ pods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl get pods --selector"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("job-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hello-1202039034 --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jsonpath"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("metadata.name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n$ kubectl logs "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pods")]),t._v("\nMon Aug 29 21:34:09 UTC 2016\nHello from the Kubernetes cluster\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意，删除 cronjob 的时候不会自动删除 job，这些 job 可以用 kubectl delete job 来删除")]),t._v("\n$ kubectl delete cronjob hello\ncronjob "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" deleted\n")])])]),e("h3",{attrs:{id:"cron-job-限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cron-job-限制","aria-hidden":"true"}},[t._v("#")]),t._v(" Cron Job 限制")]),t._v(" "),e("p",[t._v("Cron Job 在每次调度运行时间内 "),e("em",[t._v("大概")]),t._v(" 会创建一个 Job 对象。我们之所以说 "),e("em",[t._v("大概")]),t._v(" ，是因为在特定的环境下可能会创建两个 Job，或者一个 Job 都没创建。我们尝试少发生这种情况，但却不能完全避免。因此，创建 Job 操作应该是 "),e("em",[t._v("幂等的")]),t._v("。")]),t._v(" "),e("p",[t._v("Job 根据它所创建的 Pod 的并行度，负责重试创建 Pod，并就决定这一组 Pod 的成功或失败。Cron Job 根本就不会去检查 Pod。")]),t._v(" "),e("h3",{attrs:{id:"删除-cron-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除-cron-job","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除 Cron Job")]),t._v(" "),e("p",[t._v("一旦不再需要 Cron Job，简单地可以使用 "),e("code",[t._v("kubectl")]),t._v(" 命令删除它：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ kubectl delete cronjob hello\ncronjob "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" deleted\n")])])]),e("p",[t._v("这将会终止正在创建的 Job。然而，运行中的 Job 将不会被终止，不会删除 Job 或 它们的 Pod。为了清理那些 Job 和 Pod，需要列出该 Cron Job 创建的全部 Job，然后删除它们：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ kubectl get "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("jobs")]),t._v("\nNAME               DESIRED   SUCCESSFUL   AGE\nhello-1201907962   1         1            11m\nhello-1202039034   1         1            8m\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n$ kubectl delete "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("jobs")]),t._v(" hello-1201907962 hello-1202039034 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\njob "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-1201907962"')]),t._v(" deleted\njob "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-1202039034"')]),t._v(" deleted\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("一旦 Job 被删除，由 Job 创建的 Pod 也会被删除。注意，所有由名称为 “hello” 的 Cron Job 创建的 Job 会以前缀字符串 “hello-” 进行命名。如果想要删除当前 Namespace 中的所有 Job，可以通过命令 "),e("code",[t._v("kubectl delete jobs --all")]),t._v(" 立刻删除它们。")])])},[],!1,null,null,null);a.default=n.exports}}]);