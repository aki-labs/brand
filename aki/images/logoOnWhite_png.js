/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAACXBIWXMAAA70AAAO9AFOFz9FAAAAEXRFWHRUaXRsZQBQREYgQ3JlYXRvckFevCgAAAATdEVYdEF1dGhvcgBQREYgVG9vbHMgQUcbz3cwAAAALXpUWHREZXNjcmlwdGlvbgAACJnLKCkpsNLXLy8v1ytISdMtyc/PKdZLzs8FAG6fCPGXryy4AAAdDElEQVR42u2dB3wb5dnAnQQIe3RBs4AQKNAUKLRAGS2Qr0AX0JbV8gFfy/rKaIFS0gKFtrQUyixJIJJn4sSOs504wxmOnWU7seV4xNs67b3H7VP6vHeyfFICTWzJlpXn+d3PP1k6nXR3fz3v8z7rzTuEgpIBycNLgIJgoSBYKAgWCgqChYJgoSBYKCgIFgqChYJgoaAgWCgIFgqChYKCYKEgWCgIFgoKgoWCYKEgWCgoCBYKgoWCYKGgIFgoCBYKgoWCgmChIFgoCBYKCoKFgmChIFgoKAgWCoKFgmChoCBYKAgWCoKFgoJgoSBYKAgWSpZIjIgU5qUNhvArjZ6fbLZ/Y6X5tCJqciHZziimvr7cfM8W+xv7vVtMIVoQYWd4A4KF8nlICZK4xRy+f6vjjCJqgtbwX7ezig2/3GbfZglJkjjKeCFY40OkmLTWEL5qpVnNzUStfsZS05wNtkdqnM/ucsP2eK3jtirreUtMEzVUnpbAl6ehJmioq1eZK6mQKEkIFsqQ9AWYOzfYJgyyclKB4e7NtpLugC3CxQZFOgTUkFFPkjd9iNN2+n+40XZivqLb9BO0FBwEnkewcOwjsrg3eGaxAgd1WpFhbr3bHFZ4kkTaxw1Uc/v+zdbM9Ve/9NB257N7XO8e8FabIyFOlOSdqBD7cr3r9CJQb0TJnV1sXN4fkKQYgnX8UiVK4ssNronaAUBqgsZw/xaHIcQQoHiaO1jBrL6PXnABPW86M59srgWzJ2qHDK+TC/U/3GQt6wsyAhAmmULsvVvtykuT8qm/N7ulDJtcCFaWCthDj9c5Bm1wamkvqBlJFBi+tYguvoaeN42ZP01GijygF17iLr5lyhLjKQWUGi8gctoSw4KDflaE40kl3T7Qecrzr+zzZJQtBCtL5aW97gkyIjOWGg64aYBAcLQwZd+n508HqghY2svZbS9yvevFsBVGRXngk3gp1h9gF/X4H9xmP6PYMIFY7vDXcM1Kc5uHaLsGR/Qri40KW++3eolthmAdP4NgUbdfufcXlJn6AkCVxLaX0p/OBBUFYDFF13CtBSIb/vzj+Fnhg1bfV0uNCqCnF1EV/UE4eKuX/eIiordOyDdsNIYz5IZAsLKOqi4fQ5SNljqnxNDukana9wE9X7Glzmd3viGywaOnwccIT+9yK+PjiVqqoMsP7621RCYXELbOKzXYIxyCdTyYVuL31tlkHUOtHAgBVRwYVbKFTmsu4/RbpSMNXmSGSIbDI3hBlfljeV/wtELicTihwFBJBWHc/KDVq/ggYNDMhNJCsLJLXVX0B5SR6+EaJ/zLW+ujn1xIqNJeLjhbUwgQuSjfU8npFrI6LduiYVu0bMP7vE7Lkz2llCNvNIZOLqBkRUj1BVgw5udUWZUBt84SRrByWSBiA5E+JRRjjXAiTzOlNxGqFlzIG+sSVMkuLJ5rLwOkBB+l6CTO3sIZdjB1f6Yb32f3/pPd/U/B2ZYCIoyDspYy3LreIpExl51MUDPcvM4qpdspj2BlkaynQsog+EqjG1hh989XfApc/TuSiiox6mZW38v2rU+8UZIEwdvLti1mNjzBLJxFL/8Ra6jhulYwB8vUQyc8foB4s2CqqF/WF4B/n9zphMdAG8wWEayclZ9WEx/mKYWUPcpLXJguuIIY7ItukARmaPijPczS2+i1D0kiO4hLTPDr2a6VdOkNcRt/3nR65T1C0MzZdFxrSYItgNIaZc8qJu6Gy5ebeEnq9jOTCMr6J+pc6XVrIVjZIn6GP5nY14Z7txBrmu1YysyT1VV7qdpUYip/SS+YKbg74TFn2QtmlmDeRc+/gJk3gxn0wpMHi64DBMlxjHWCfpt6GH19v0cx4zaAr0GK3boOLC3qy4uNnCgiWDkoa/RBxZRe1hckLobV9xFE8mdLAp1ggju4XHZlnc/b9gkha3TBhVzvGmbz03GeBjeit1bcJUSsnLWRDKlN80QulGALQteyaUX9YpsdPuijdp/yuWQ0jCFYOScvN7hJIE+rd0J6Hu2jP7mABgNr2wsJIMBgj5beTLgBhbTxN0AMs/1lpuAK+pOZh4NFL7qRrvxfMerl/RTYZFzboqHjxCTIeoDP+kKJAbTUAU9U5YiP5QJYZDKTPhmTPMk0Xoo75Zt9UbkZbjyvr1b44PuqEuclWPYqgyN56dNZfP8mrm8js+7RaOVDECtMBmsat+ctiCzKWTRwaSSm8QP19fmwTfbs51OtHlaQpDPkAOL/7XDmAlimEPdIjf1rFcZZFaaRbxdXmG9db8tcgCLTIsXESyqIo+HOjWR44vZ/rPAhhayJfbiGd+lBsMirJdfztv3kt8mFmc3P0vOmDrG14ELBdVBNLddRLtHuxDM7rRFFS1X0kyt25UqT7IOwSukLHY4ZWLestx5Ncu0xbScWGPqD7HgEC5zm5ywyQR7fr2udZIzb8SdZLV0MfoRBOCRmw+NJQ968aXz3qrgyY3xMw/tDzC28VFRNJMkOzjbevDvxrzHEKsml77aSCM/3ZU/p7JWWXNBYs5eb0w4W/ASbXPQ4dY0Sg1qjf3YPmcpxm58hiBRdHRvyFEjgu6JVYEXLbxeHsIvRK+6WX50h/53GuzpACybcnmLQxPVvGJqBsrxyxf7a5IP33rWZgDVrmSkXwKq1Ri4qM0JwNE2bASpV3tjvzlweSIY1liTHW/TP7lbA+g2hp/gaSWVxs5W/hCC02kKH0M2QtcoGJDbI9q2jtV8n1v3iG5g1DzA1fwRLi4DrG+D1WxIf52biYL3ZTAz2H28m5t3XKsyxHBgK5QxJyUnztrRsUZ4WxrH9LoiDGmu3mziftr5A0MmfHZOG/E/s9t/TybM/PmRJup5MkG14Lx6xBh8pBBk3PyPwxKUugDfL3ZXYGRIoFAU/v8MHV+276y3w77dXW3NkVoiSYKLBSZOkPJjztwUIQxufkofCb6nvNH+wPMWtEC24QhT5IfJ02uQdzqfr/hyTUx64AwWxwXETpMoQVsCqMkbg1VnlxHj/0SYbgpVTApbQXZtIqgyUc3X6GAly2kuuI97z1fepp2lC1Mkku6zYA0XK4AW7CQED/elFSU6HgitY635lysk0zVdD85f9bgUsKsiGOf4EuZLnOVlZIli5o662W8NKIt7Pt9rB6cQPVBPX6PwZbNPH6jtN4jlbf5c0FPZVydzE2M4KpuT6ZHU1DWwsgSH6j7Pu4x0tqqiOdMNaMvbNKDMB03VW2UGqoYq6AwhWTqmr68ltpiYX6Ht8NLjXmbLbiOt84SwhbEs1xUJmWnN5gh6uaR5JmKn/F/3JRanOd82lTP8mkQ3Qta8xda+pA8y9EHjOJ7nwT+9ywvNvkNAhFIdRvYF0emoQrDGWNXq/XPJAPbNbTpXpWCLHkqdxe98+4v58byW9YEbcit/6OyFApVj08a1sDufuBKVFL7lFYgJqjp/Z5VKC0HscEZFkgBH/2SXLTFJaJ9QI1hh7Gb65ihjOUJVlCbOQ2UeXXEv0TeGV4D74rKGTb1+isBVd8VMws+j5044A1sKLmfI76CXfAw+W+r0wHzxZznb/zhoLQLbTFlEmDa+muxoMwRpLgfRzpRj19/UuMq1r0QIl4Clgm7Wfb5bxxl1MyXXxUrAjgUVeqn4agtnqN3KC+N1KS57c9KHGHAawfrKJ5P2dkK/vD6Q5YoFgjZ11FRNvkx1IpxUabFFOhMy+om8SJ0LxtyQ++l9N/pgQJSCWzRlKw1K2Ty9mNj7BWxqUCn31u17YE69VfGi7Awa+GktYzvIzPLjdkXYXYPaCFVNLyn85IWFeOCmfVJP+qhZus8g1fzoIxwxmya18z6qjOVMCWMjK7n5Tye9jeypFLnLE3f6u8yqzv4vKjR6aj/AiJJHCM1AHBuNj2s8uL8t+xCTNA+oINpsiH3f4/tDgeazW9cA2x71bHA9uc8DjuQ2e+R3+rZYoSd6NidIYBXDS0s3MEGLz5LjKh20BUWDp4utSxjK+f+NRfopwsIy4tebPEDxdR6QKyr8myrbUF5VaRUl6imS7k2fmNrozcYnyskQ5BVhhWX/wkR2OC5aaJhJ/HSUn+R850iz7Eg3gL4buBmuocIQXRk2NwQfttEUfq3O90wKloCPK5Q1wgtxjiPpVrZO3tzDVz3K7/gZ5VGzd65CeQIytlT89yl+OAhZkJ/NHAgsOcuVK4tE4u5ja64hCC4j57X75ClNXrjBHeSEHwYIf/m5b5OEa1+mF5BLnafXHlM4g708qhp/a6YDeBKNAVYcXZlV60hBBSz290zWSqC1o3FurrJC7clI+taTHL8WkxFjPbfqNPDe8+ijB4iFBXnaKir7+w1+NkDGX2FK/3U2mCNXmsNI0C65bl5/NqRJ7EjGNiVBCeWOlJV05M+D0g9qmFjedOTsMDvuXJm/iE88uMYxwLN5jj56YrxxNf9ly0/1bncv6Q2T6pnjYC646SnCF9tI4WH794a/qSfYVIWleO4ScpYe2k5ng5HzDNksG8yLzxoSqdi/z/Sr7BO3nN9JUFBilmJzqcfCzFRg1KV8PF84UZjJhfsE3/1OjJ/FxMEsfeZ5JRX8o3hZGPs3n9njSDhY0apMNLMN7B0j21c+2kCKz6UshB1rM3F3OG2WkoFETNPSdXPiZcMDdumqV+amdbjDeNxijTW6628/2BbgeP7vPRa+jwu+1+h/d4by0wjRJG2+dePh2drEhv9MvpputTIAFx4QsbTjsJNnoyQRYssYiX/gtHUmS+cU2R66BNRBkblhjIlXemsMGMi0FrQQKOv2uKB8btDY+wwehvCrB9fqw1XfNKvMRddhEjR7mkjAnyHKwDg22Qz5JNt1eqB8OWHxbiZyDNU0Kmg9/FWbZyiWKg7WdgDWl1JQLYMmTqfBXFh9hvANfzhN1dkgXGd5NgnfttUfurrZNShox49tlFeae9NmnGQKLqBxJOvHowFL782C4F6Mu3rRLSYcHD4UYdR5+8J5A3MZ6R+dNgPXVHAALrsBaCtroHK5X9PdU27rTcePhI+od0e+sNR/O1nmlRp0rkha2MghWTILsBrj9zyk57zJYtAxWHCBSjRMS3R1CXyW77yMWdlhxF6SYxrv7KdXP5Xcczgq8XdsZ72CzzRLJHbDgxFbrA6TNV/ItP6+UWqUPprceUBRFmPhAh+CUz/rCIoPOFU0HvpkCC3xLZ5eYFJ8WAatmbrx4sEXD1b7KrP0FU3Kt3Mp2Bsk5nnd4cHAas3SO4OlMOUela7KSIPqFEoomjW5zBSwISJ1aSKXc6ZvXWczh9HtQlAGi3cNcVmFK0lsaakqpcSDAjPATMwhWTPjGCuLDvH6tleim3nVDseQjBJinQRM2uuJOSGmHSlSutxJazajXnmAEAaqVIERx/1b7qYXxn9lfmzyK43DcgwXnCTllXyoxJt9j/UM1DkbIbCjGw/BzSN1iEs2zl5sCnJgWsKDZ+jnF6QQL5P8hxkJgpcAXQ2qXd74ObbGYeVPJ39Kb2apfcbvf5NqX8OY9QsimZLInbC3oG0OFuNKewG93O2+sJEvrpNgDD251cJKUI2DRvHjNytTiwV/XOYRRWXgjKghyTkjSROH+rbaRdBhLgFXeF4Ybk16wwEaUE5Spa1aZIEhMeGF8gp+CTAfFYFACqaS0KcrvstGFXUFo9wBOKVB1Stwi6YckxwHPLDbctdm+jgolvHrjHiw4kxf3ulKoemCbXRit5VxgWIAoGNFbSa4NqmQEmd0ZBQuu2KM7HEo26UXLzBA2hrbHoNq7/PQaKvR2iw+8d9evsUIUeaLiKNYcwclyYr5+9goT7DmvIwCjIWnvnnyy4xssuAH19ih0e1Y7ML+92hLlxUOjKPA14KefYm9BixVbhM9CsA6RoJ54e5U1EWyYKKfgkQwIzeCWGsUyTFtivGWd9fFa59stXph6Q2A74eg74u9nfIMFauna1epBkMSJ+wPMobGQVg8jNwwe+jKgGKRh+swyCxbxYIni35o98uI5lCqERR7Dk99abYEcvb82+8r6A01OGirlj1X7jm+wYH2OCcl5CiU9/jFM0COtp1UDxwlaqlmOVWchWMq997JCeX/wlX3e39d7PmoPVJujkLwlSOLIW9DCwaH/NpA6/sCCavHLkhp+ULeRHr1j2VKBF8Vr15jVsWpwzA6DidEBK9PmQX5XYPpSo9x0VBpPYK3Sh9TqCrJZdO7o2OYTw6fvssOcS69yQVGd3uhxCFbC2xfL8CwqL91fWvqfKlvSTHBkM/y0fTFJ+sHGpC/2uz3uYYNVBmAtNo4aWPC5kCD/6UH/R20+F82P8FcKoyH482Lja1k56AUwSTUThHnNflc0S36pNVBLrrK0vrzIyB5jn+AEWJcuM0IS5qiBFWSFmyrjSRywwgA41kfC6D+avaC832zyxMbLsnLwRd9r9aq1wvVrzFLWDBYwV03p9rbRFBoeWGkP6XyOEG8c+CBUP4n9zuE3l/MwwllyLAR8p84oNz7AAoZuTXZIzuvwZZVtAW5GNViQA57lYMFU8MebbGqqIMQOTcWGfQVehU4N8aPp5za4x8d6heD/PKVQnbunt4S5Q9kknfGGY/HtGytMx2T/jSZYJMdBFH++JYkqSJBfNRAa9jHdjHC2nAY9o4wsYnhmkdFBc+OgmIJ0D8unVEFfc7YVl0LM7fylRnXaqo/lsxMscJE8vN2WkmRb2hscySV9dR+phD6rxNDjZ86Sl0Sc2+DKdrDg+2k6Q+oYzmO1ziysWr5/a1Jkerc9moVgCUpBafI0SHPQN5Lr6aZ5xbp6tZHA9Foj6b12RsYsrbSBBZPYF+s96nv2YasnC8H6W7NXnQKwqDuUbWCBf/15iN8nx5ih5T84ykdyPV+T+2CdXWx0kuEPOBPOIZwRSyvbNZYcKxhyuG80Rg9ln8jhpiGw/qHzZQ9YSrmlrEuSEmDe0rlH6AuMqysNLF4fN9iJ0tpHDHkIQToyoLTSCdacZNdodrZchypNNf3P7z2GBWQyDRboqreaPClUvdLoGSFVZDK4jxwWFpSDVBpoL63z0FBXt8USUhbCnNvozt5uM/DNblirXmyCrA+bhWA1OZnEnQOL8Ik6Z5aABckuH7b6UzITn9/jFEcct4BsHMVUB7xEYr3J46ziFZL/Al4uhs9esL6zxqo2No1Z5mtQpMPLqcAy/LrWcfRwZA4suZbGNyk53epJkm0rjnypN3D6KLP1FndUzm5wHF6EZ0r3zcocWAZjBME62sOW9gYmJWXoU4/UOPg0xVgtYX5CPgnAt0IDo8F8LAQrx8GCY4LP86R8db2J4edbHJyYtkEWwToewaoyhpRus4ntR5us6a1iQrCOO7BqrJFTk9Om51RZIpxwKK1zNATrOAJLzj2kzyxJsqtuqrQEufT310Owjhew4DhNzigUmAy51zUGKJTwpnvOj2AdX2C1eaJfWWxSOUL1V6wgkZYMnTKCdVyABZkF0EhCHQq8pMIILawyF1dFsHIcLHi7PsheUKYuoKVmlhkMIT6jp4xg5TJY8F7wgMO6y+pQ4NSlBuiCmelTRrByGSzIIJAz7oeoOnexEZp7j8IpI1g5C5aH5r650pLcC86oI9XYhxAsBGs4YMFboMOC3NJ36EaeVUxB06JRy4JEsHINLCAHVly+ZZ0lpcym1hoZzdxaBCvXwIKSwB9sUOeoGSAsuMkYHuWMbQQrp8CCeuV7NtvVuuqkAsMafWj0K3hzCizYGpyRbCumIEsUmUKJdcUyBJZSEvhQUgUA6bVXToq3xqAuPMfAomBVkk8O+kv7wtmzze/wzSw3qfoZpR8sUhAhSbC0olpXQRJfYXdwrLoN5JrGivc71BiyZ0upqcoEWFD48NzuFKr089q9Y9jwKBfByu4tE2D9sSG5eEtLvd3iGdtGTgjW+AYLXoXuoClruryx3z3mzdkQrHEMFjx4v9U/MVlXvVzvkrJg+pJbYMmrpb9zwPtxuz97trdavNNVTUHSBRY83+ZlSPvxQdMK7LlndqWhJBDBOoLGgnVplWbj2bTFYL3gtPuxSOctnUtlWlF3bDALongoOwQdpOPVQQrPL+1yTdQOyEfWn6ztmarVrex1Z4kbD8Eax553aGf16JaBMzQdZ2nbp2h1T1T3TdG0LOl0ZENbZQRrfId0eFF6ZvvAuZrm1/caREksbndM0TRr25w4K0SwRurHAmv9xVpqZmFznYmsvlze5Zqqaf63zjq2YyKCNe7BOiQ3oHttj+H8fF01RfrOadvsoMPeahzLrpkI1ngBi/rSIuPkws/s8w437++Npuna5pIO++2rOs/VNp+7sOmNvYax8r8jWOMDrNMKKOjY8cJe9+ekzcDzHzVbz12oA3V1nlYHGzx4aadhTDxbCNY4AatQD4sCvlTv+fx8LNh5Yav9PI0uARZsz9YMCBLmYyFYIwBL2b+00wHeBxgNFbxge2xLP0fWPcXUZARruGApb1ne4542SJWyPbypl+EFLKZAsIYPlvKu9QPe6flDYIECu6+qB+osRoctBGt8gHV6gV48FrCUN1YbPOcXtAzpLU3zXWu7/AyPYCFYcbAgN+b6teZzS43HWmK/0+yfWQRsDdlbd6zu8kS5TOstBGu8+LGG3xSkwR68pPiA2t763ooOR4TJKFsIVo6DpRxB5wxdtqhVNSbqblx20ByisY0RgjWi/lhwkIPu8BWLh9gC/9a3l7brA1EEC8EaaavIPl/06qVt52mG7K2rSlu7vRmpxESwjhewlEMZgvR15e1qe2v2orYOd/oL8BGs4wgs5Wi2EHNzRYd6TPxaSWuzIxTDdtwI1ggvmpvmblt5UO07vbjowF5LAMFCsEYqPob/wZquc1X21oWFuh0mX7r0VgpY/273XVxhmqXablgLuwgIVq6BBRJi+bsre9RsTS/Qbdb70nJ8NVjKWUgpkoHkaQQrK8A6JDfTur+qe2ieqNFNLdCt7fOOXG+lgAUgwWp1ghRLbJChj2DlLFggtCg+sqlX0VtfLznwhzpqqra5vMuZRrDgFBZ1B08tpE4q0Ce2q1eZ07ssFIKVXWCBQGOtJ7f2gd4qbHOAaslvtX9V21zU4RiJ3koB60+NsNy6Xr4I8kaqt9F4z3WwQCDF9Pkd1KzCA3vMfkkSlx50TdE0fXLAPmy2UoZCVhBrrNEt5ghsJd2+PJwVHidgHSJlZOIfd+ovzD+w3eAFy3plj2tqfvN7TdbhtRixR+KnDEv3przU7o2vkG2NIFjHAViKif1mvXG6VrdxwA1sbez3zihoebPeNAy9xYrSaYXklIu7U91ji3ugk4X+1EIDLYhZDFbyKvY5CdYrjZ68wbdPLjRktPsjfNy7+yxTtE2reoGt2DaD74IC3TBKFGF/WAuYrNtTbrQpq0HJ3VpAk80sh8UyDD+rtqe93VI6wbpzozXRIhF6ufoYIQvBskb4oWW9NRQkgh79fYId1xkSzWqo29bbMt1WFI6/oMUG5dRlB122MH1FaetFRS3CsXsHwLoCtQTfGbo4/avFt8EY+dcBz7Ql0NFJf0ohdUC2vbIXrFpr+PQimGXAOKif2+CWsqxlcuJ7Pr3TqYAFy7v1B5hjvNOx1/d5IH30pkprb4AehaR1UKiF7bap2pZLS1phtnhtefsw3E7wPaETOKxdoPwk5N8/MedPK6JWDwQycRZ56b1nVIhd0hvcHe+MlY1gkRsVk3baIsv6gl5GGMawQg4wKKPzleHzVvW5bqrouH115357cHifCwfpCdBP1jlhXTvQUueXGR+vc8LiiRn6/ecdQkFBsFAQLBQECwUFwUJBsFAQLBQUBAsFwUJBsFBQECwUBAsFwUJBQbBQECwUBAsFBcFCQbBQECwUFAQLBcFCQbBQUBAsFAQLBcFCQUGwUBAsFAQLBQXBQkGwUBAsFBQECwXBQkGwUFAQLBQECwXBQkFBsFAQLBQECwXlWOQ/aol0POYpyCoAAAAASUVORK5CYII=';
export default image;