 const data = [
    {
        id: 1,
        name: 'pop',
        title: 'london grammer',
        img: 'https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/LondonGrammar_New.jpg',
        items: [
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'pop',
                name: 'london grammer',
                title: 'A Perfect Day',
                img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUPEA8QFQ8QFRUVFQ8PDxUPEBAQFRUWFxYVFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS4rLS0tLS0tLS8tLS0tLS0rLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAwYHAgj/xABEEAABAwIEAwUGAwYEAwkAAAABAAIDBBEFEiExBkFREyJhcYEHFDKRobFCcvAjQ2KCwdEzUpLhNHODCFNUY3SisrPC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAEDAgQFBv/EAC0RAAICAQMCBAUEAwAAAAAAAAABAhEDEiExBEETIjJRYXGBwfAUM0LhkaHR/9oADAMBAAIRAxEAPwDmSaELrLghCEANNJNBkE0JoECEJoECEIQIEKJNV8m/P+yil5J1J+aVlo4G+S2QquUm9sxNvFOOdzefodQix/p3WzLNCwQVAdodD06+SzpkJRcXTBCEIMghCEACEIQMEIQgBITSQAIQhAzEhCEFRoQhAhhNIJoECaE0GQQhCBAo0ry4lo2H1Wad+VpPPYeajU4tv+uSZXHHbURnDVZqWjkkPcY4jqASFdcM4KKqTM+/YsOv8bunlsuo0NKxjQ1rQANgApSlQZur0bI4rWU0jHHOxw8xZYGhdqx/BWVEdi0X5Eb3XIsUoX08pjeCOh6hOMrHg6jXsY3QaX8FJgfcWO4UWOa2h8vRes9nB3TQ+SoanFyVMmoQhI5QshCEAJCaSABCEIGCEIQAIQhAGFCE0FQQhNAAmEkwgyNNJNBkE0kIAiVrtQPVeIwXWa34ibADqT/uV5qnd8+GiyUceZwGfLucw3FunzQjq9OOzqOA4aIY2sA0aN+p5k+a2Okh5rkLeeXESC22khc3c25EraOEMWqM4Y+fOwjQk3t6rDxdzyMqpXf+n9zoPZW15LT+OMHimiJzMbI0XaS4A36aqTxVXyMhLWuLS7QOBsQOZXNJoIiCXzkkEXFi4i/U8kLHe4+nu7+1lVbQ9QvWa4WRzW3IZfKRpfVYGrZ7S3RZ077tB/WiyqJh7tCOhv8Ar5KWg4ciqTQkJpIMgkmhACQhCBghCEACEIQBiQhCCoJoQgQJhCYQJjQEIQZBNCCgRVSG5J8SrbhyhE73MJ2Zp4ElU6veEZ8kx8QPuUrOvqLWJ0X1FwzKcjOzgyxuJDyHBzhoQJLGzhcDTRXz6COKRuW2bNdxa0MaHHcNAGgVlRzZmrBUNAlGY2Gm/UlYeRvY8WXO7MeItbJI0PF28wDY7W0PIqtxfhx57N8Qhc2H4RJHYgXJs7KRnFzfXqplbMwSta11zcX8L7K5eC1uqepxRrvscixigfBKM+W8hLrNFmg31AHIKqI1K2zjtwMsZ6B39CtTfutJ2rPY6dtxVkmgd3iOoU9VtF8Y9fsrJMh1C84IQhBEEk0IASSaSBghCEDBCEIAxJpJoKAmkE0CBNCECGhCECGk7ZNCBFVZWGBm0nyWAxakfq4Xqld2cgJ2Onz1CDpyvXjaXsdQwiWwCWIRQSytMx+HlmIGm3l5qsw6oDo9DrbkqxlHGXEzVEjXE7ucAPspuG9nkYvPKmXwpqNkgex13ixuXkkkba3+is6quBatJrcPp2gBtRI53+Vhza/6VZ0gdHEA8uJ/iNz5XWtN7srOKjVM1/i193Nd4kfRa2r3iWYGw53uqFNqj0uk/bJNAO/5AqxUPDm7u9FMTRLO7mCE0IICQhCBiKSaCgYkIQgYIQhAGNCE0GwQhNAAmkmgQIQmgyCEIQIwT6G/VeZCCCP1Y6g+ikPaCLFRHUrrgA3ubAdboLwcWtydgmLGJ2V9y3quiYVHTzAOIY4fxAH7rl8dM9kmVzdR+t1fRmSMXaS0ncDZNQ1HB1sccZKce5v9bTUzBnDI2+TWhaPj+NNF2s18lEqaqeTuueSOiw1VD2ced/PYcyfJbUKJ4tGpav8ACKGaVzyXO3+y8AX8ymdTpuSp9NTBup+L7KR7cprHEywR5Wgfq6yJJpnA3btghCEGQQhCBgvK9JIGJCEIAEIQgZ4QhCDYJpJoECaSaBAmhIm2+3jogQ0LC6pYOd/LVYnVw5N+ZsizaxzfYlkqPBUXnZbYO+d1FmqHO8B0C9UP+KzW3eGvTVJlVhqDb9mbewZ3C41C2SHCmvaDoqbD4g5ubY3tboRutuw5ndHktuaSVHzcoSTaZVw4G0OuVH4ngZ2OQNHnzW0OaAqPFnMuc2w38FnxN9zeNO9jlFdHldbbmvcFXyd/q/upPELB2gcAQHAkA9L2Hr1+Sqkm97R9JjSyY1qLdjwdiD5Fe1ShZmVDx+I+uqLMS6Z9mWiFBbXHm0Hy0WZlYw73HmnZGWGa7EhCTXA6gg+WqaCYJJpIGCSaRQAIQhAzwhCEGxoQhAgWKaoDTbUnwWVVkrruJ6lDKYoKT3Mr6xx2sPLdYHOJ3JPmhOyR1qMY8I82TATsmihnmyz0LM0sbTs57BfzcAsSz0DSZow34i9tr7XuLIMzflZ0Wkw0B410cSCL7SD+4+yuo3mPQFUs07xcvYW3tmLe83TUOFuhVnhdQ2UXvqNDrexCg7PCZJdUOd4KHVQtkIZ+7ZYvPNx3DP6n0U6teGZWtsZJDZjep5uPRo/2UOsIiaI2G8h2B1JPNzkISo0Tjtze2Y1tu6wg2232WtELYuNIsskQvc5HEk7lxdqVrwVYcHs9P+2hJhFla8M4FLX1UdLFvIe87lHGPjefAD56DmtcF20lbKqyS7Px17LKSChfUUYlE1O0OcHy5mysHxkgjR1rkWsFxkrMJqStGMeRTVoTSRqCrWB+ZoPX7qqU/D3d0jofutE+oj5bJSSaSZxAkU0kDBCEIGeEIQg2CaSaBHiY90+Srnbqxn+E+SrSUmdODga9L1O2xCzYdQTVD+ygifJJYuyRtLnZWi5Ngiy17WRrIsV6e0tJa4EOBIIIsQRoQRyK83TASnYG29VCP/Mb91BVjw5/xkH/ADGrMuDOT0v5HTXRG2m/kq5sEkLmz+7SuaXODnCNz2uc0nvZowABbLdpPXVbTR03aPawfE4gfM7rYeNaSRtNDT0r+zIkBzhwbZrGO3uDckkctyuXVR4vJzyjbJI58jZTma50Za9hD2WtydYi+h15EKXSYfku4uLnnd79XEdFJw3C3wufLNKHvmy5hmLu80WBOgG2miuMLphJPGzk52vkNT9AU3LYymrpD4i4fp4cFqZZqeJ9QYHPD5I2ufG8giPK4i7S3Ny5kr5/X0X7Zq3ssJkbfWZ8cY8QXZj9GlfOipg9Nnq9L6bAL6A9j3DTaKiNbMAJqpoeXO07KmAJaLna47x9Oi5J7PeHTiFfHCQTCw9pMeQibrY/mNm+vgune2niv3eAYbAbSVDf2uX93T7Bv82o8geqeVuTUEGZuTUEbPFiwxDCqmoaP2UjKpsY5mOPOwO9cpPqvmNq+hOAHW4aaekFZ/8AZOvnxqWFU2h9Oqcl8RKbhp+LroosEL5HBkbHPe7ZjGl7j5Aalbvw57NMVmOYwCFjh8VS/s+f+UAu+iq5JclM7Who15K67Bhvsjp4256yqe6wu4R2hjA/Mbn10Wh8cUeGwzNjw6SR4APaOc/tIw7TKGO3J3vy2SjkjJ0jgTNaQhC2aBCEIA8IQhBsE0kwgDHUOs3z0Wfh/hetrzalp3vANnSaMib5vdYem6i1DmhzC8EsDgXNa7KXNBFwDyJF9V06s9r8VPEynw2gaxjGC3bEBrD0DGfF+YnXopzcv4otByUfKuTNhnsVe8NNXVhpA1ZTszf+9/8AZb7wfwNR4WXvg7V0kjQ10kzw52UEmws0Bovv5BcPquMsWxCRkPvcrTM8RtipyYWXcQPwaka8yV3PiGobhmEyFhN6enyRlxu4y5cjCSdyXEE+q58mvhvkhkU1UW+exr1ZVcLRvc+Q0LpHuJc7I6dxeXEknKDzuorsf4SPdLaW3/oZrfPs1woIVvBXuzo/Tr3Z26ooeEqsWbNTxOOgdHI+lIJ5gPAafUFQGeyYsmjqqCsZNEx7XZJMuYgHW0je6T6BchXRvYVVzjEHQsLvd3xPdIzUsBaW5H22Drm1/EpSg4q0zOTHKMXUjo/CdA73kue0gwg3B5POg+mZSeLJc07Wf5G/Vx/sAtrEYBLgBmda5tqbbX+a0Svn7SqkPLMWjyb3f6KGPzSPKybRK6W97K/4NpbyOkP4G2Hm7f6D6qhqDZxW68K02SnBO8hL/Q6D6D6rWTYnhds5j/2gcRu6lpQdAJJnt8TlYz6dp81yJbV7UcW96xWocDdkLuwb/wBLuut/PmVh7JOFPfqztZW3paWz3XHdkl/BH4/5j4AdVeFQhbPbhUMds6JwHhkeCYU+tqu7LI0SyX+JrbARQjx1Hq8rjU4rMVq5JmQyyzTPLiI2lwYCe62+zQBYC/Rd+4wlwqbLHX1sAihdmdTGpazPINs7GnM61z3fFa5We1XCqJnY0NOZA3QNhjFNCLeJH1AKlCT3aW7I45y3aVtmxcDYFNDg0dDUN7OYxzte27XlnaySEatJBNnA7qqw32V4TSND6gvlLd31UoZH/obYW87q94W4gkxDDPfcgjke2ezWHMGFjntbYnc90FfNVbiU8/ennmlJG80rpP8A5FKEZSb3oWOM5N717nfKrj7A8OBipzGXDTs6KG405F4AafmVqWK+2qaR2SjpY4wf3lQTK63gxpAHqStB4hwRlJDSXc73mpiM8rDa0UbyOxFtwS0OJv1C2jg3CWmloT2cbpKzFG96SMP/AGEEbw8a7i5J8wtaIJW9yjxQUb5ImI1GK4kM8ramWPcARuEP8rQA0/VZKLhUSUokdK9tbIKh8NKWC0sdLlEjSTqJCS6w/hKmVGNxNlkxGeoNTN2r301AJXSRQgOPZvmOzQ0WIjaLkgXtdTsd4s90nha2milrqWOMSVcxzls0g7WcRR7McXSPBdcnlyVbfCOY02HBal0fbdi5sH/fTEQxW65nkZvJtz4KC4eN/EXsfnqr3jeaR9Y97pZJIpAyWB0jy8CCVge0MB0aBct05tKoVtDBCE0wMd0JJoKAhC8yOsCeiAItW65t0WAn6ILrpJHdGNKjo3sSwP3iu95cP2dGC/XnM8ZWfLvH0C2f2+4zkhgomnWZxlf+RmjB6uJP8i2T2RYF7nhrC4WlqT2z77gOADB6NAPmSuJ+0THDXYlNMD+zY4xR/wDLjJaD6m59Vzrz5L9jkj5819ka41NWGDYFV1knZU1PJI8bhoAa38zjZrfUrrXCfscjZllxCTtHjX3aI2i8nutd3pYeatLJGPJeeWMOWc24R4Pq8TflgZaIGz6iQERM6i4+J38I9bLvXDuBUWCUoaHd6RzGvmd/iTzOOVjQPM2DR/cr1xLxVQ4RCGOyhwbaKkhAzEAaCw0Y3xP1XOODccqcaxuOWfSGlbJMyBpPZxWAY06/E67xqfoNFCTlkV9jllKWRN8I7RVzdmxzz+FpPyC5zTSd+53OvqVuHF9SI6Yi/wAZA9B3j9lq2EYbNN3mMOU/iPdaPU7+izi2VnnZd9iP2RkmawbvcB8yujyOEbCR8MbdvBoVNhfDrYpBK995BchrdGg2t5nfwVljFO+WF8cdszwWguNgLjf7LM5KTDFBxTs+U2QyVVUWRtzS1ExDR1fI8/1K7jjNZFw5hLKeEg1clw06EumcLyTOB/C3YfyhaZwdPhOF1k8skznyUEXZtcdTV1RLmymBtrNaLBgudnXvZadxVxDNiNS6pmNr6MjB7sUY2aP6nmSV0adbS7I9bS5tLsipe4klziS5xJLnG7nE6kk8yV4K9LyVc6UfQfsZOfBgzpJO35m//wClw/hTDveqympjqJZWNI6tvd30BXZfYJU5qCWPnHOfk5rT/Qrh1azs5ntbp2cjgCDYjK4gWPooY15pI58S880dM4zwKP32fEMVk7KmzltPRRuBqqqKLuMDR+7YQL5jr3uSqxxZFTQ4c+KIfsBXv7BjyexkmllbHq65NgQddwtEqah8ji+R73vO75HF7jbqTqsK14e25RYtqZasFgByAA+i9vcSSSSSTckm5JO5J5rww6DyTuqHFRPqqsSU8LDftKcvYCecL3do0X8HGT/UFBQhAAhCEAYwhJNBQFhqtrdSs4UatOyTNY95IikWNlecGYF7/XQ0tjkc7NJbQiFur9eWmnqsnDnB1diJzU0N49jNIezhB/Md/S67X7O/Z23C3OnfN2tTIzIS1uWNjS4OIbfU3LW6nopTyJL4lcuZRXO5sfFHbtopW0cZdUOZ2cTGkNDS6zc1zoA0En+Vc84V9jcbCJcQlEjv/DRXDAf45N3egHquo19fDAwyTSsjjG7pHBo+vNct4q9s0bM0WHxF7hp7xMLR+bWbu9bLnhrqonHi8R7QOkk0eHwfuKamZ+WGME/cn5lct4x9sBOaHDW2Gxq5Br/02H7n5LmON49VVr+0qp3yO5B1gxv5WCzRvyCrgrwwJby3OmHTJby3ZnqaiSV5kle98jzdz5HF73HxJ3XYfYDhto6mrI+NzYmnwYMzvq4fJcZXQvZ57SRhsXus1OXwZnP7SEgTAutfukgO+YVMqbhSNZotwqJ3HEcKiqHMMoLmxkkRk9xzjzcOduix4ji0VOMosXgaRtsAOl+gWoM9oLa0O9yD2xtdkMsjQ17jlB7rdbDXc66clBqKi13OPiSepXJGDfJ5GWbht3LSXGZu17YP79rW3ZlPK3TZVvFnHMraGoYGCOXsyGzMedS4hvdH4XC55lQqurDBc8yABcC5Pidtlq/FNQJIMjnx2c5twy7u605ic5sPwq8cdvgjjyVJWznoXstI3BF9ri1x4KdRyu1cGtbGAbd3Qu2aC46nU9eSUlWMxjcM0Q0AHxNsLXafRdSR7XjT1Uo8fH8V/X6mL3YNGZ7rDTRozOJIvbXbS3zWKoaBazSARfvOzFwOx02Uiesa7Qx3sXEXcQLHa4HgAN+SiTSlxufKw0AA0AHgk6NYvEbuf58q+5072B4lkrJqYnSeIPbr+OJ2wHi15P8AKufcSMy1tS3k2omHylcsOFYlLSzMqIHlksRu1wANj4g6EeBUaWVz3Oe4kueS5zjuXE3J+anpqTZWMKm5e4rJOTXkrTKIsKR12Dw0WZR6H4fX+ykIODIvMwQmhBgEIQgDEhDbX1vbnbQ28FsdFjOH07g6PCzO4bOr6oSNuOfZMjDT63SbKMw8O8J1teR7vCezO88nchaPzH4vJt11Xhr2V0VLaeqPvEw1vJ3adnkzn5uJ8gtGrvariLm2j7CFgGgiiuWi2wzEj6LRsT4grKkkz1dRJf8AC+V2T0YDlHoFKSnL4DhCc+HR9F41x7hdEMj6lhe0WEMAMrhbZtmizfUhLh7jeCropsQLXRwU7nhwcQX5WtBvpzN7AL5iU6PFp20z6NshFPK9sj4xpme0WFzvbbTa4HRZ8BUbfSKuSTjmOz19S6one4klxawuLmRN1IYwHYDRVK9RbnyP2XkqyVI6UktkeuQTa0nQAk+AuvUIF25r5b623tfWysZXWY7/ABGtscughaXcgGjV3mTyW0iOXLoaSXJDip3udkA7wFyDpbS/68046fM0OJsDc+TBu756ALM+sALHN1PcLz1LQBl+h+fgrB+ETvYCQyNh6kuIADS0EAaNAc3yuSU20iWrLKtqX5f9f2XXBzQGviYXASujc0g94Nc05tevcK2iSKYFsb+/HmDhLs6zdcrx1uBqFr/A0MMVRLCZ+2ysaWui+EEudmDRr4X1HxLf4hmzGOHMLmzybFoDcxtzvpe/j4qDlu6PK6nE9e7KiWklfYMaDfXvML/Kw0WvcXYdII2O7WzszrkgF+RoIIazQWuTz5Hot6tf45mAXIIbYEWDm90u11LbaDmtJ44raKN0PbRSzTFpfq4ZGnN3rh1w6/iPwnqsJu1RrpoKU1ZqXZ0YdeaeSXUWa03sA7vXDdtAba8/VUj9yRtc25C3JWWMYu2oaxjYGRti+HK6+ha0EaAD8IO29+qqnFdC+J7cI0qC68lel5TKIEJJhIBhJNIpgSqB249VLVdSPs7z0Vgso5MyqQ0IQmRBCEIAxppIQUPFQ4BuvPkoBKl1g0HmorrckjowrYSE7IsmWCM6+h+yRT2XlIRkikLdWkg+G+qReTqSSepNystIRsXAW1APM+B6pVM5e7MbaAC/UDr1KEY/lx9TEplLVDtGvmzvjDgXszfGB+HyOx8CVDQEzTRvHCXEDW1eWmhETHNcbEhxzDIW8gDbJfW+5W3+/SEWzkAm9h3RfQcvIfJcp4flyVLD5j5tK6BHUqMlTPJ62HmpFs165/7Qpc1Uwcmwt+Ze8/2W3e9i260LiufPVOPRrR8h/uiO8ifQY3HIVISJ1RdAVj2jPHECNbbg3zaWtsbDQrHPFlcW3B2PdNxrra/VOOUt2t12B+6xJmUnYkwkgJFB2QiyCgR5Vo3YeQ1VWVY0/wAI8kiOdbIyppITOUaEIQIxoQhBQ8y/CfJV6aEmXw8MYQhCaLBIvCEJMECaaEDBCEIES8J/x2eZ+xW8N2QhYyHndX618v8Ao3rScc/4h/p9k0JQ5DpPX9CAUBCFU9EAgoQmAkBNCQz0F5chCbEeVZRfCPIfZCFlEc/CPYXpCEzlYkIQkI//2Q=='
            },
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'pop',
                name: 'london grammer',
                title: 'A Perfect Day',
                img: 'https://image.shutterstock.com/z/stock-vector-pop-music-text-art-colorful-calligraphy-happy-illustration-funny-notes-and-vynil-music-sound-515538502.jpg'
            }


        ]
    },
    {
        id: 2,
        name: 'Rock',
        title: 'radiohead',
        img: 'data:image/png;base64,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',
        items: [
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Rock',
                name: 'radiohead',
                title: 'A Girl',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk5UBfY07IHruZnenyigeetHVnt4n3nK1GTw&usqp=CAU'
            },
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Rock',
                name: 'radiohead',
                title: 'A Girl',
                img: 'https://image.winudf.com/v2/image/Y29tLnBvc3NpdGl2ZS5saXZlLndhbGxwd3Blci5yb2NrbGl2ZXdhbGxwYXBlcmhkX3NjcmVlbl8wXzE1MzU3NTE3NzFfMDIz/screen-0.jpg?fakeurl=1&type=.jpg'
            },

            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Rock',
                name: 'radiohead',
                title: 'A Man',
                img: 'https://i.pinimg.com/236x/b0/f1/22/b0f1228a4d5e12e1657857ce4f5d2aa6.jpg'
            },
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Rock',
                name: 'radiohead',
                title: 'A Man',
                img: 'https://image.winudf.com/v2/image/Y29tLnBvc3NpdGl2ZS5saXZlLndhbGxwd3Blci5yb2NrbGl2ZXdhbGxwYXBlcmhkX3NjcmVlbl8wXzE1MzU3NTE3NzFfMDIz/screen-0.jpg?fakeurl=1&type=.jpg'
            }

        ]
    },
    {
        id: 3,
        name: 'Hiphop',
        title: 'Linkin park',
        img: 'https://images.kerrangcdn.com/LinkinParkHybridTheory.jpg?auto=compress&fit=crop&w=700&h=394',
        items: [
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Hiphop',
                name: 'Linkin park',
                title: 'A Perfect Day',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREZO6o_yjznYfEulI6cYDC8L9puwUaQsB-pw&usqp=CAU'
            }

        ]
    },
    {
        id: 4,
        name: 'Classic',
        title: 'Weekend',
        img: 'https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,dpr_2.0,$w_750,$h_416/performer/254738/rded8odb2ojtidlkqm2r',
        items: [
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Classic',
                name: 'Weekend',
                title: 'A Perfect Day',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrwjkQygsTQZoZygeVx0EhFkT11HYMmVliBQ&usqp=CAU'
            },
            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Classic',
                name: 'Weekend',
                title: 'A Perfect Day',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW4iC5gx3PiTc9IjTl9V_tlm6T1HFXijUqDw&usqp=CAU'
            },

            {
                id: Math.random().toFixed(8).toString(),
                sub: 'Classic',
                name: 'Weekend',
                title: 'A Perfect Day',
                img: 'https://st4.depositphotos.com/1158045/22277/i/450/depositphotos_222778598-stock-photo-classical-music-concept-cello-violin.jpg'
            }

        ]
    }
];


module.exports=data