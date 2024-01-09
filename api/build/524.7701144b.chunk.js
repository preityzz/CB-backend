"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[524],{40524:(ts,c,s)=>{s.r(c),s.d(c,{CreatePage:()=>v,default:()=>z});var t=s(74081),m=s(27279),I=s(73354),B=s(27875),l=s(10701),g=s(48102),T=s(74758),d=s(93415),h=s(32370),f=s(23298),R=s(74577),U=s(12881),W=s(39708),i=s(15530),K=s(76827),u=s(84260),x=s(71563),j=s(10124),p=s(61020),y=s(59461),C=s(51447),S=s(19003),$=s(38178),E=s(68902),P=s(47853),es=s(40464),as=s(64797),is=s(85811),ns=s(66333),os=s(15816),ds=s(97442),_s=s(13576),ls=s(87830),rs=s(47184),Es=s(364),Ps=s(49204),Ms=s(75719),Ds=s(74919),Os=s(29206),cs=s(98934),ms=s(43433),gs=s(8175),hs=s(10131),Rs=s(8243),Cs=s(63799),vs=s(51943),Ls=s(39738),As=s(3243);const Z=P.Ry().shape({name:P.Z_().required(i.I0.required),description:P.Z_().required(i.I0.required)}),N=S.ZP.div`
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.primary100};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[4]}`};
  color: ${({theme:e})=>e.colors.primary600};
  border-radius: ${({theme:e})=>e.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,v=()=>{const e=(0,C.$B)("/settings/roles/duplicate/:id"),L=(0,i.lm)(),{lockApp:F,unlockApp:V}=(0,i.o1)(),{formatMessage:a}=(0,p.Z)(),[J,M]=(0,m.useState)(!1),{replace:Y}=(0,C.k6)(),D=(0,m.useRef)(),{trackUsage:r}=(0,i.rS)(),{post:G,put:H}=(0,i.kY)(),{params:_}=e??{},{isLoading:Q,data:X}=(0,E.u)(_?.id,{cacheTime:0}),{permissions:b,isLoading:k}=(0,E.a)({id:_?.id},{cacheTime:0,enabled:!!_?.id}),w=O=>{F(),M(!0),_?.id?r("willDuplicateRole"):r("willCreateNewRole"),Promise.resolve(G("/admin/roles",O)).then(async({data:n})=>{const{permissionsToSend:o}=D.current.getPermissions();return _?.id?r("didDuplicateRole"):r("didCreateNewRole"),n.data.id&&!j(o)&&await H(`/admin/roles/${n.data.id}/permissions`,{permissions:o}),n}).then(n=>{M(!1),L({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),Y(`/settings/roles/${n.data.id}`)}).catch(n=>{console.error(n),M(!1),L({type:"warning",message:{id:"notification.error"}})}).finally(()=>{V()})},q=`${a({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,u.Z)(new Date,"PPP")}`;return(0,t.jsxs)(I.o,{children:[(0,t.jsx)(i.SL,{name:"Roles"}),(0,t.jsx)(x.J9,{initialValues:{name:"",description:q},onSubmit:w,validationSchema:Z,validateOnChange:!1,children:({handleSubmit:O,values:n,errors:o,handleReset:ss,handleChange:A})=>(0,t.jsx)(i.l0,{noValidate:!0,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B.T,{primaryAction:(0,t.jsxs)(l.k,{gap:2,children:[(0,t.jsx)(g.z,{variant:"secondary",onClick:()=>{ss(),D.current.resetForm()},size:"L",children:a({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,t.jsx)(g.z,{onClick:O,loading:J,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})]}),title:a({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(i.rU,{startIcon:(0,t.jsx)(K.Z,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.D,{children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(d.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(d.x,{children:[(0,t.jsx)(d.x,{children:(0,t.jsx)(h.Z,{fontWeight:"bold",children:a({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(d.x,{children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(N,{children:a({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,t.jsxs)(f.r,{gap:4,children:[(0,t.jsx)(R.P,{col:6,children:(0,t.jsx)(U.o,{name:"name",error:o.name&&a({id:o.name}),label:a({id:"global.name",defaultMessage:"Name"}),onChange:A,required:!0,value:n.name})}),(0,t.jsx)(R.P,{col:6,children:(0,t.jsx)(W.g,{label:a({id:"global.description",defaultMessage:"Description"}),id:"description",error:o.description&&a({id:o.description}),onChange:A,children:n.description})})]})]})}),!Q&&!k?(0,t.jsx)(d.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(E.P,{isFormDisabled:!1,ref:D,permissions:b,layout:X})}):(0,t.jsx)(d.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(i.dO,{})})]})})]})})})]})};function z(){const e=(0,y.v9)($.s);return(0,t.jsx)(i.O4,{permissions:e.settings.roles.create,children:(0,t.jsx)(v,{})})}}}]);
