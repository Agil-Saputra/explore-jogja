const restaurant = [
    {
        "Name": "Mediterranea",
        "Fulladdress": "Jl. Tirtodipuran No.24A, Mantrijeron, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55143",
        "Street": "Jl. Tirtodipuran No.24A",
        "Categories": "Restoran Eropa",
        "Phone": "(0274) 371052",
        "Review Count": null,
        "Average Rating": "4,7",
        "Google Maps URL": "https://www.google.com/maps/place/Mediterranea/data=!4m7!3m6!1s0x2e7a57bd1a830c51:0x917adbfd1657973b!8m2!3d-7.8184765!4d110.3645324!16s%2Fg%2F11hc_2l3kv!19sChIJUQyDGr1Xei4RO5dXFv3bepE?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8184765,
        "Longitude": 110.3645324,
        "Website": "http://www.mrbykamil.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep13trn_vdqXU7CuGpgtwAewhN7qGkfS5rDvhNOPxWmKhhBOJVHO6aL_Hld_MQfPrsj3_Ttj2kYEtJRUIyLp6N-gCwoyxuLl0_-3rRedCmgpNir1vnv8Dx9HM_2_8Wd5Cz7RP1UZQ",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqYb4rDnwKv73fIWzmVKWwwOdeCOmz2cJRQgBbwpmjurMMj7WoLNfv5sMYoeLjx0sIN_rO399vvkpPbD0pPlALcM72b0lrNKTAVam_cueSbpqDXKIw4LoIGiygxRFj94KD37fnfjW9Sjus",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqGrQv12S5jd2wLxnWJHzH-BqrSneGH9b_uAN1Hmwp6ADVuy10ug7n4jRB0eTRnzOt0Y6xkOFRjxaLNq_9jLVh7cXMMOHahW1_tmHhTo8mtElQ7ggZHnlan7MP94pKG57-DJD_OuA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBYELfa7k3LIvjB3zhcSinr1_Bece4ICb4Lm7fsH-v8hucMZZMTzbb5jxWj0dfNK582CfR5GOnIFYaZHSydOpDBo3FkWTjYX44R1xzlDVQCje22gRkHC_uZ93jBpiXzIKZ6LXL",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerSLtTKtevmzALKIRDKcEDHr9dLIevuEvJ6dw2AkoGD3ZtQ2BvoMYD9jBVpkYtPKY7AF-7L0T327mvTJrB8KFy2IZsEIWolI-gJbHEr3o-6_XAGQEv4vVrIjsak3lrMeK9l537lsoVe1_0",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepo8I3EmU2uF6J5Msu15MnAPCfn_8uCpu7sblql9_ko99G8liKixjThm1v7ohzQoWq_wN40W4NigQvymqx9mOHFPyK3i1PQPXSEFP4PRrewXlHgxcbgUwRhV3tjVW8yIIaTGDDX",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqYGxtAS6S33Q9inmtycoB9nMqJpY09LMw1XXn0GBGxRtC9Hg1Kdw5Iq7UadiAzn7gcjYG44ZsJILAix3GEOMwpUgpar-JgPT15UtD6cek3RTvuIVgma1RgrtOauwCZHo2u9jbX7Q",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoG80gQjLMss0Wss8JKSU4l2yxTlbuZcJ0HJyCXMHR9C0S06C3kPx1GzSy2G0QWtV8yOoHKHtGQ62WSxfRSWsyItslMbpbjT3l4hp_H0qv2CdLFTf0yEpNydPqVk4iugtdoZrhPCypv-7U7",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepXmmW0ZdHbs5U-u5VtX7C4lOFlEeTHj0Ne9oxv4VEE7EiJceJ-F5OSZ-UfVMDJElidG0Py3_ejo2jgyUQ27hoksM8v38ym69yLIzfZBf9uOOu6lV7fy60UqK0ZX57x0-YIDpl3Th_Xhq4F",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqtNMG7LzBN3J3VFUjqu1844-yXlJzFgcVKSzDutUR4uBHd94p4juP_xRNOJHA6SakcNfnGtIUL9EYgKoaS79u5Npe85Q3F6CKKDEXaRiLuPxPrlqZPNtmDLJosXbTuwfX4i8Bu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoU4wgiSVwoi55E2_yMW2hzaOn8lGhukntVdV73BCK3dlMhIsQitUnmcHutwUJkFx87lDX4RVk8JlLkgPRHhSN1Msr7xUa-nJkdPxQq4Yg7yPW-Tg4tQJk0w8qRoL75HvII_uhjCG8JaHY",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonObFGcnFbjiU4aErDNTYp0yftZqFGCB_BKvg8zkAu3PwxyBIPyF7lWPqjdRYsntLNhwM3rFOfTfx72b30JNi3WuCfrQIBS3JvwMpYfz7KWaf4CDHm3YL_PwVpPyw9FT64wpeTsb9gkhU",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerV_ytRiqCFemjwigKrJdrQOKEOqUc9ho6PopIAzYGjRmHMJmCV12Zi9bh9xPwM05EVMu05NgnzjK57A7LfQGtOpaMPHwAVFHMozf3ShFTPIBVxmlPTj9rhL7-q3l9EClMU0oUkiAQh6IQa",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep1UYGntn0QMGMFKfN0WqQudTf6_CmwnD4rrv1kTcGTne24YbV_WaHwfLr7la54kSOUJZVdJV6cz60b-wa1rDXJ0lM_4ztPAuS39iXHPxhwa0nSa6yeBMOY7pigaU3UAq_dxhYDsXPv0RVt",
            "https://lh3.googleusercontent.com/a-/ALV-UjUP0J2gxjDKGTsO56Zt6RUrHxwVGBYZJUVUtwmsGhaWYcjVZxA",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt14E6sl2WU5sAa8onZU9ZjWEPTg6j9Sq47iJCmIwX9RK7LN4w_dUtR-I5s_1Ajh_5hNWv7lcj_UuaLcYdnB_N-4CAqKGR_H-ELozls3qMr6Dbq8suAhtfSqukl8CVWujK3-XgC57ypKj4"
        ],
        "Place Id": "0x2e7a57bd1a830c51:0x917adbfd1657973b",
        "Top 5 Reviews": [
            {
                "name": "wiwik s",
                "review": "Awalnya penasaran krn byk vt di akun tt promo restoran ini. Dtg ke sana posisi sdh hampir pukul 16.00 sore sabtu. Ternyata jam segitu pun meja sdh byk yg penuh dan reservasi. Dpt meja dekat pintu msk, kurang nyaman tp ya mau gmn lg. Staff \u2026"
            },
            {
                "name": "wiwik s",
                "review": "Awalnya penasaran krn byk vt di akun tt promo restoran ini. Dtg ke sana posisi sdh hampir pukul 16.00 sore sabtu. Ternyata jam segitu pun meja sdh byk yg penuh dan reservasi. Dpt meja dekat pintu msk, kurang nyaman tp ya mau gmn lg. Staff \u2026"
            },
            {
                "name": "CKarina",
                "review": "Makanannya enak, gas aja yang penasaran and better bikin reservation aja klo datang dari luar kota. Imho, the management should train their servers regularly for welcoming their guests, arranging seats, dont come when your stomach too hungry orelse you will get upset easily."
            },
            {
                "name": "CKarina",
                "review": "Makanannya enak, gas aja yang penasaran and better bikin reservation aja klo datang dari luar kota. Imho, the management should train their servers regularly for welcoming their guests, arranging seats, dont come when your stomach too hungry orelse you will get upset easily."
            },
            {
                "name": "Dahli B",
                "review": "Saya tidak ada komplen mengenai makanan nya. All is good...  Yang menjadi atensi saya adalah kenapa sekelas resto terkenal dan sudah buka \u2026"
            }
        ],
        "description": "Mediterranea is a highly popular and famous European restaurant that serves delicious food, though reservations are highly recommended due to frequent crowding. While the culinary experience is widely praised, some guests have noted that the seating arrangements and server hospitality could be improved, particularly during peak hours."
    },
    {
        "Name": "Gubug Makan Mang Engking Soragan Castle",
        "Fulladdress": "Jl. Soragan Jl. Kembang No.13, Kembang, Ngestiharjo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55182",
        "Street": "Jl. Soragan Jl. Kembang No.13",
        "Categories": "Restoran Sunda",
        "Phone": "(0274) 622972",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Gubug+Makan+Mang+Engking+Soragan+Castle/data=!4m7!3m6!1s0x2e7a581b8b9129e3:0xfbe2cd96b589f5d9!8m2!3d-7.7830916!4d110.3501837!16s%2Fg%2F12ml2lc8r!19sChIJ4ymRixtYei4R2fWJtZbN4vs?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7830916,
        "Longitude": 110.3501837,
        "Website": "http://www.mangengkinggroup.co.id/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerjB9aRmRxoZZo6ySkvFZZc5UlxKauMqOfOeu8L6RsIMkRKFMa2iCO-aH1nTMEBJ-BMdlJDpJOIeRAd4dyrhDeW43mXgNR2cYwCffjRB9XQFgJADdKZXO36VT57aPrNMY9tGoHENg",
        "Additional Images": [
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptZ0aRKbJaYSESD_qSNhHlNnIjE9ZHohIAIL6NdrJxIKUp4bkUJqL-zzoSe2VtgHTxTyjKLsRvAGwYuoulT9OrM1LV_z72fGdyHAELEW0YcFVjHJr5bUB7hqI9qHStxgnHMve2CZo5WOy7O",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pux_q4ksiwEVtdgPD6LchcztriLAQM7qfyikmT-Kw85CrtkMVFD5kD1OyvUBjqDo0vd_3kWB34mQPoDCACZ7HTlHamzn5SENhoKJkdLiYEyJdoLMkjWTb0qGrZQYcVblcQLJoUmO-AwSbxt",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt-ZrAfR_8r4hGtBEb6KL5H2_kaOx-9Va4C8sPfSw0RpygSPqNiYaXqFVVjrpXQruuKDVZKACvLRTE4lrU61mLyTHzrncoBZnPlhGEsBNoEDjfkqEQ39ClZ5VFGn0WR9_yMbiUCtX_JUOiV",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pv4FC6oUCujw8nGxZpOgpTN4eZLaHYu10JhkVkSPbs4yKrnC1KOM4oWOFShlR9_gRx83tJDJ31kzHTyq83ZLBHxOR3YQrIN76W9KCRC9Lf6I4G-wKq36QVs-0RREH-Kkx0SxyID3-u83WA",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvjH1tnjcQ7IabDgREs4XULoMFXd_WMPccgvhZuUuR7IVUnpmN54_yyEgwKXXT-mo0Jt5NhiOqs8giqLJKfpU_ccAUJCKiPR4g9thHaBQdNfQ58-8BBGlawqMvmdBOgz0SJBjqqoP0DAijK",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvzdtmlOLLo8ZApN1IwkGB51eJaugARelBQ6WcAvX_mGWpdZNPaoql5fdYFZsSw78So9kV04I8NCBIdTUJnQiUPIFug0PWvjEkB-XjbpnRNO9iGU0L6PWkb7q76-3x5bk0fpF2wWYF9P2vj",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqPKDu8SKqF77u0l22wtfevF6cXEtv2ICCaLpkWsxITEtL7iTfoiCTB5O7zz0GwZ8-mkVbZa9qaMJuOpGU5_6nCb5z2oBUAnMvYLcGognijl5yKauj4NFfTedSAUMrzGIn0vjcc",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepOp6O0UxtMBHlJjnpE73k-Gmk-Hx8OT7LJ5TaJVrHf10HOpVj1QTjE9u17PYlxtaDAJkvb5lZy2rpRxWu5_puBhSEYA0PFXmQFhJrNciUXWOTcoTZNw8zLuse0JuRS6jn_DeFupQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq7DsaXOgPtub_yl8rsQq9_ULFqOkaHbyATidCsj749jabO9W7dpQO9QgWSys0E-RdXhGGDvGeZ_XVI9ZQdqVsS3AAX7Jk8IGgOaAG_msbUhMeQEUqXs8TV83Sxo_i4WXL-fMlAX-vsKvk0",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepEujXc7-1gPsPJtshIUpHRPVoZIjN3qTrHeHRnE3rKZFGs6evdqteS5QW8lN161Yuc2ZP1LXXlkkIsQCnapbG_pOJcXa6KCCnVNExVvm8e_Ql8kOyXW4ds8-Q_7HkBV--_vjGUyQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqcSDBJvGu6_MyYN3Z6RJF9amBJNzgxQ5qGMenDTMibCA7_jqnPxpm_FX7LaiYH54J4G86wpRea1FNb8A10nCZBlLUFNgs7Kub3qH791IxvQp-D8qBSmGRH_TbhizegSVHUPF_T0g",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBnSDZ99f3UtI6bWwACaYutH7aqyaUCSFznp4gozl7y96ZclQq446J94esyRsatbMTUaCIeE3VJCm3J0qP2o9-7qGshNfu3xW4inXy7-TATcZi6a-IXwTkO2foNch4-b225qgOEQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepmumMNZRAs6hVhGbuUWpqngqlDJWX3zY5l0a-RibnToWwSdbfXVe939lsGTy7iGxpEW_EycHdwPevuVjc4dAmTlNOqYwPSluFY483UfRiUcEi9WcG2-OkeEqFaLg1vjJzuk00Lhg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweorciI6_wBl3oLEpcfrkTTZcujQfo1HQlpxE_2MNAWvwSVeGjJChHi6vSj0JidMWnpZ0lmInXKDscpzVI1Sks9hj0V_3R_6wevLKfrKPCdW0ebHOEYBqGLtrV4RyQrNoh3bmVrWtIPeJqDM",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerZO924kadoNedBrhAJgrO-jrqe2RNLGpE1Br67XjvHb7dJQ-sqkT1PqARsZGEGH_kMsQ3mWJHVe0Qmb7k_WIp2BhRInqBolgPv-TBTkAry19aRMP5p4vCDYw9eNt9Glv4SsbBj"
        ],
        "Place Id": "0x2e7a581b8b9129e3:0xfbe2cd96b589f5d9",
        "Top 5 Reviews": [
            {
                "name": "mochamad irfan",
                "review": "Warung makan dengan konsep lesehan yang mewah. Bisa duduk di kursi, lesehan maupun diatas perahu melihat ikan di kolam. Menunya variatif tapi saya coba menu guraminya yang sangat memuaskan. Harganya lumayan sih untuk kalagan menengah atas. Parkirannya luas bisa untuk acara acara besar juga"
            },
            {
                "name": "mochamad irfan",
                "review": "Warung makan dengan konsep lesehan yang mewah. Bisa duduk di kursi, lesehan maupun diatas perahu melihat ikan di kolam. Menunya variatif tapi saya coba menu guraminya yang sangat memuaskan. Harganya lumayan sih untuk kalagan menengah atas. Parkirannya luas bisa untuk acara acara besar juga"
            },
            {
                "name": "sa",
                "review": "Beberapa kali ke Mang Engking Pusat, lalu nyoba ke yang Soragan ini. Konsisten! Sama enaknya semua yang dipesan. \u2026"
            },
            {
                "name": "sa",
                "review": "Beberapa kali ke Mang Engking Pusat, lalu nyoba ke yang Soragan ini. Konsisten! Sama enaknya semua yang dipesan. \u2026"
            },
            {
                "name": "Henriska Ruli",
                "review": "Tempat makan legend sih, udah dari lama. Makanannya cocok semua di lidahku. Tempatnya juga asik dan nyaman. Ada castle, kolam, tinggal pilih mau ambience yang bagaimana. \u2026"
            }
        ],
        "description": "A legendary Sundanese restaurant offering a luxurious \"lesehan\" dining experience with unique seating options, including over a fish pond or within a castle-like ambiance. Praised for its consistently delicious food, especially the gurame, it features spacious parking ideal for large gatherings, though prices lean towards the mid-to-high range."
    },
    {
        "Name": "Bale Raos - The Sultan's Dishes",
        "Fulladdress": "Jl. Magangan Kulon No.1, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131",
        "Street": "Jl. Magangan Kulon No.1",
        "Categories": "Restoran Jawa Tengah",
        "Phone": "0813-9326-5505",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Bale+Raos+-+The+Sultan%27s+Dishes/data=!4m7!3m6!1s0x2e7a578d61c24d1f:0x49bde399ebde344c!8m2!3d-7.8084895!4d110.3630646!16s%2Fg%2F1tk3w7vr!19sChIJH03CYY1Xei4RTDTe65njvUk?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8084895,
        "Longitude": 110.3630646,
        "Website": "https://www.baleraos.co.id/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerNxXfeys1-3jtfY6HB5OIQ0a1Kq1jjPaoGS2o7UjOcQoODKpkQietZUKWJFQd04qjer4vf8Wfjx-4pYZKg0vtj6XH8ruC7CmVtpIsC_3tfKhs94kvMBbPoIXqTKPGFWVLEwlhk",
        "Additional Images": [
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptFiveZm9YglaZVdXISH-Rz0sK3AI3e80EdqIxDp61TrH5HBLKgGIOGwCZtNc7Aqwfx6pRZlZ2wfsLHvyWTkRL7l0GtQH3y2Zm5Wig9kS6qf-IC2umhYWKLA5axe_jrlZ1_Tp73mSArmWtm",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt27k5do8Lka6NzamFhZhyrQkcKcfqs9WiwxTTURqZwo63NlSXoebAyHltEIkA-T_KcP8H_cniW2e-s0IKLKLKMyx9idegmkV-9YeW4EdMvPyMCIW0IVJMKkUXO2WnfoRl7jVdl8ljjMbUh",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psak-u1MMAIkXHd2i38nPbMDXLcGIFnl9tSgFAz-dXQOk96l_UlKx1bRoqEbwcNuXzsj6Kdk1HT0iJiWtc60bHrTDy5cP6XP5leKqN7G-dWWL3S1MwO6fkc4dr_MRRj4zDwSf9gs1Ug69No",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoYwSXAbE3t7y_9H5qv849Kdg2UjYwWZ5I4aEX9BF13lhQqy1PCSDObKKXXpHVj2tUpk0CiK5EulPaC_QjukFS8GEQ753CTdlIFhrl2QmearvYLryA9n9c3ylbAG9jS6folZdh8",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerOiKJvq8v5fQYKlbEVs_AIwuVYIn_D6Ig0B9tm-IIrwJhKx6bPShnaVooHlwwriWM-HzYmJC3yiPciRQ9MiYohwoCNxSZaO2WscmI2_2ZU3hxYI76KO3QpX14uJQnNYX-p7XBH",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweroHgXGJl3Oz4xbQImecTzfx_c7SiqB-P29ZVhjuZmi94rdb50Pj9NtgXZFTkndTsM-pUqHwSJkk6E3WWCeSMQYgC8sEMKnuaS7mPzfPM0d9OcfDsOLMOJlJtPccTEOpddQbOdb",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqBGCfWLyNOpCNCk5_cdFlN5qWRjBJQ46RiMmJD14MziInxQqket4WqSayvvs5eMMebECVl-bvhV8J-H6DnUmEkUgFWRTUbPwbRbM8QHlQBXFT6-qO94hjF-MONltuHCAYLKXbD__cr3FQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepY8yva5KxxobghC1BahcNeNqITIG68UZ81RVpRMtwMzlVe2s7xZM_X5UAEJr-qMceMkBF4pGoQ7X03z2c_etuwF8ymlVY8pzxqInai4jpTRs26F56rAsiyFSwfFQlEnMePfboksg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer-Cylpd7UdCiiQtO1g1CJP9qtgevAoL0qz6lfwc6hBl4icA57BBKUf2d8GbzXR7G-MdytyeX0s0ufjjd_--kggTxmdpGJpnNX8Ft8FmdM8FmnyTrDoH1IW4PxxzVbHnmNGjV8j",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcb8ISh9EZqIlQEDtse0NxNAEAYI2APlVqBMWkcTGPJ2IlsmEUgNFljZPSkNLJg4PFud4mtQcw5fKhhwUAzJgPcxMhyqmTpszu78A9KnteDQv_zvuSbmsWTWorU0orN7ptApwbzQ-npTJ9",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerAUPktX7CDo2LiU9AHuit3yuzcE3nEzRwYFjN5rSiEzPbuaQiWzV7OsM_Smpkxt7PHied6oDUBdJGuf_ogafNq5huZeOMzt4zA15tGjPvd4-mPoZ2dfqQ5f7Woju0nnIc0wcuG",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer8cuXZbtzPt19VFHJLBkN_mLhySldfX02y7s8Mx3IYOhUExrZenbiFDiCwNks7q5311s04mYYI6DcSMWc2Pp01fIch5FBH-f-AbrizFkhGWzxr0gYjYLKRSF7SWZIq8Dm6YZ8K-Q",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq86ZOrk629gguO94wAAv_O6SkSetkQKNb1yPHFQWFSQCysa9m8oqzBU_YvFrk83FHz12yhe-ujLwa4b-24Ittw0F9yzZLauA0HdeyZXNXO0MDGMawVrgurujZYp1d2ZyTCkBmD",
            "https://lh3.googleusercontent.com/a-/ALV-UjUsFuVlvdAGjMJRPUivHzQtcRj03B2-ooFx19uigWp3T6TeJKPD",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoQAwq3ayKnimty7taOWt0rzrw9Ah0teyiJqE6hkTUKqu4TQDLe4UL0j8s729rb-zCZtBeaDLqCgR0wdYgTVUAo5dmk9aCEWKmLGiE1P8lDV7PQvdxVSr7IaXZ0r3BZkC27n9VZ"
        ],
        "Place Id": "0x2e7a578d61c24d1f:0x49bde399ebde344c",
        "Top 5 Reviews": [
            {
                "name": "Nur Fadilla Octavianasari",
                "review": "Kesini dec 2023 dulu, dan baru sempat review gegara bukain si ipin. The real kalau mau makan ala-ala sultan bisalah coba makan disini wkwk. \u2026"
            },
            {
                "name": "Nur Fadilla Octavianasari",
                "review": "Kesini dec 2023 dulu, dan baru sempat review gegara bukain si ipin. The real kalau mau makan ala-ala sultan bisalah coba makan disini wkwk. \u2026"
            },
            {
                "name": "Yoestini Marine",
                "review": "Soal lokasi dan pelayanan bagus dan baik sekali, namun sedikit disayangkan makanan datang cenderung dingin baik nasi dan lauknya, awalnya saat kami diantar supir ojek online mereka sudah info kalau kualitas makanan di tempat inj katanya \u2026"
            },
            {
                "name": "Yoestini Marine",
                "review": "Soal lokasi dan pelayanan bagus dan baik sekali, namun sedikit disayangkan makanan datang cenderung dingin baik nasi dan lauknya, awalnya saat kami diantar supir ojek online mereka sudah info kalau kualitas makanan di tempat inj katanya \u2026"
            },
            {
                "name": "Afnan",
                "review": "Tempat nyaman dan sejuk, suasana tenang soalnya lumayan jauh dari jalan, para pelayannya ramah masakan juga lumayan enak dan bervariasi, dan tempat parkirnya luas"
            }
        ],
        "description": "Bale Raos offers a unique \"Sultan-style\" dining experience with a comfortable, tranquil atmosphere away from the bustling streets. While the food variety and friendly service are generally highly praised, some patrons have noted occasional inconsistencies with food temperature upon serving."
    },
    {
        "Name": "The Tree Restaurant Yogyakarta",
        "Fulladdress": "Dawangsari 02/03 No.45, Dowang Sari, Sambirejo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572",
        "Street": "Dawangsari 02/03 No.45",
        "Categories": "Restoran",
        "Phone": "0811-2558-890",
        "Review Count": null,
        "Average Rating": "4,8",
        "Google Maps URL": "https://www.google.com/maps/place/The+Tree+Restaurant+Yogyakarta/data=!4m7!3m6!1s0x2e7a5be74031c637:0x6c8e4a177c993881!8m2!3d-7.7694738!4d110.5041159!16s%2Fg%2F11qg0ff527!19sChIJN8YxQOdbei4RgTiZfBdKjmw?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7694738,
        "Longitude": 110.5041159,
        "Website": "http://www.thetreeresto.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerkc6Rz0IHmFlKpdS4LT4hC5Q70nj5aCkRYQ99vkJLLhUvzfko_2mPhzp62e2dW4T9s2pLQ30B0N_70V6xfCbZ_50jOOxdvYyDsBjRPYpF47_xHUSoFMxUd6qiGeat5hmhftuzgzxwu8pzk",
        "Additional Images": [
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvYruRgNARrw-Zdw6lYcrHv6RXMKZs05xTulMycseUdYhYuyKeaYUhnoFCbMxPdJk8CAlCxOGA9-k_lPpOiQVpTASlpAMjuWL-yycguuVqSVLEYXcv_9KlQm4hvLK9_jJ0XKTINzR-q2iI",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvLaDx-xy5gHUFhdPuxhYmPHQuiJSIBGDIec6SmR2ep9Q4UKyYn_mbh-ikBhPufl-5Hwo4IU7YQdlNVKQN5e8EnaAmAKexURRhrRk9YTFV0BkL63SCZDwVYVERcyrCa66gwrTb4xv02mYEb",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9puYuLnCcKDUnXBLh-JR51go7SNKICYoImzRMu7LRuIQTfncdZCcz8fErYGHr58p27bfbUiX0LkYcgETRZgMGcIpPW_Aoc8vXRuD0_YzmX6mOMiYqV1Ayqov58JU_OUMfIu6VzjNM_Z6J2P-",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptUsNquQlhIPe8sqFSPUvFn50ZiwcDR4Ef2ko29rF3JLm0TMJNhgcMARfLZ50hh1ZXGj8vIYhn8xinUQZGHeDAhu1ULTveJBozcqPeTRTMgIu9iiCm_XWMcYpM59uN7uG-Iu5ahDAoFhISY",
            "https://lh3.googleusercontent.com/a-/ALV-UjXCRvs16MqzgxM4PFIGIdY7gHG8TtFSEwSu5dOhk45smVTj6IJv",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerSisym50-OB1VAcVyJPCpCmu9fd2EW2SrlKESs6dLrG-v2awXl3r5SqktPI2hWSPmjsDHFoiXATeEbIWKm9hhBwLoMeoeJhw5fkWVhaWdetJc3_NlDLnlEV7x-cV53y3ZlkbCjbU262dQ2",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerYxqCzq9-oFcYomM5rtcbmYbbJE0XZ8Xerev8YHNzRo86KSHGQPW_boVgtBZCm8CaC6S_1Qn5Tmjkxa3mKbywLhMrncsEhC7Qru8nylod1l2KwMu-bX3lop7mp2KFIh0o_ZjLu_A",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer5WcuONU9QlzsyXG3dfjm4i_mNwDvSWV8PQiIT3PBX6z0Aw3nACzE42UCpV4K8MwKq7ZVJi_SdBkA7890V7qOrSnwpmApF4CZfuwkd9ASEsyN8JEAmLnmPfJ9cKKKOy780GwMcFg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6KtGYnsQsiqVZ2PL6pzfl5aGdeAV5gVyNbD2TgLZhQkuWkl2cDNN5HuljMnVzNkgLPY2MFO8NZi7EO_QICQpGFk7mCVHotT7UAdU07u0I359jeQYPYo9DQaJ0b6Vwz8-K5UZqOK86RVMO",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepxzJRqkIECc-neJY22EjfjRMBytSFw8ylYKbjPKxJfHcclcPtr27DMwTY5UyTkiqk9PSklxcxR0Fu7JsfE43wdK910ARM_it5EA4uj_rDCcj-lC-gf3xw2rTH9U01hAg1aQ3prEKkUDcJ0",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoNFHbELUQ7OtA8ktNxDfv2eziygUSo5rkLzOBM1mdIv6g7spB2BpNs1hpMd5N-pbbh5GOM2wcsG7ecsFcM4xc9VGCgYD3FsyrvwWueD4ExdHmvELRJNbmK_G3FR7-gie4jkasaFrwfJeKF",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepDEsb9zonGiEhM_yPMtfz8iTyTKh7uGuANXyliJY5MbjHplRtwPKL2XpQmpC5c20hqc6vfKIgqxtV6MtExsK_za-v0xR-D-itMSyioINPnt_eKuwwu36QSoxAiPd_syqG4MsxZwQ",
            "https://lh3.googleusercontent.com/a-/ALV-UjXSPWP-iWouwX1mgrnPVgLeirihspUlc5EkoG-MlePZbFnqo5zw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqilBn6xxC_IxcU3jrB_Zq3qhcl7-92zAg8JpZ-xKJgABpDUxIkLLuEdm0pH1bOXXXarwI6fa19aF42CrdULayOHndg84yFrG7sEs12nteqoP8xcmtSRqmkK_OlRK9aiqpklGFjtNOBZo8",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweptkueCnX3-VGsx7ruOdkPMp4mS9OEICWNKyt6eMsoT2Im6LVKJA7t6Rgg9dehiWp3qQhBwsdyVK4BSbFkaQYZLhYg_du_FBKl_n-I9rNC4B31uvLHGtVCkAE2IPoWvgysIV1DEfZo2AGk"
        ],
        "Place Id": "0x2e7a5be74031c637:0x6c8e4a177c993881",
        "Top 5 Reviews": [
            {
                "name": "Aghnia Hauna",
                "review": "Untuk menuju restoran, masuk melalui lobby hotel dan bisa ditempuh melalui jalan kaki atau meggunakan buggy car yang disediakan hotel. Rasa masakan cukup lezat, menu juga beragam. Terdapat playground di area restoran. Pemandangan sangat bagus, Candi Prambanan terlihat dari restoran. Terdapat area indoor dan outdoor."
            },
            {
                "name": "Aghnia Hauna",
                "review": "Untuk menuju restoran, masuk melalui lobby hotel dan bisa ditempuh melalui jalan kaki atau meggunakan buggy car yang disediakan hotel. Rasa masakan cukup lezat, menu juga beragam. Terdapat playground di area restoran. Pemandangan sangat bagus, Candi Prambanan terlihat dari restoran. Terdapat area indoor dan outdoor."
            },
            {
                "name": "Dinda Satya p",
                "review": "Terimakasih The Tree resto Amaranta Hotel sudah membantu suprise birthday. Khusus nya untuk staff kak wulan dan yg lain makasih banyakkk \ud83e\udef6\ud83c\udffb\ud83d\ude0d \u2026"
            },
            {
                "name": "Dinda Satya p",
                "review": "Terimakasih The Tree resto Amaranta Hotel sudah membantu suprise birthday. Khusus nya untuk staff kak wulan dan yg lain makasih banyakkk \ud83e\udef6\ud83c\udffb\ud83d\ude0d \u2026"
            },
            {
                "name": "Lia Ardiana",
                "review": "Lokasinya di atas bukit. Kalau tidak nginap, dr lobby akan diantar pakai golf car gitu ke resto. Harga makanan tidak mahal untuk resto bintang 5 (kisaran 75-200, blm tax). Ada paket \u2026"
            }
        ],
        "description": "Perched on a hill with a stunning view of Prambanan Temple, this restaurant offers both indoor and outdoor seating along with a playground. Guests appreciate the delicious, reasonably priced 5-star menu, excellent service (including buggy rides from the lobby), and accommodating staff for special events like birthdays."
    },
    {
        "Name": "Raminten's Kitchen",
        "Fulladdress": "Jl. Sabirin, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "Street": "Jl. Sabirin",
        "Categories": "Restoran Jawa",
        "Phone": "0877-3888-4008",
        "Review Count": null,
        "Average Rating": "4,3",
        "Google Maps URL": "https://www.google.com/maps/place/Raminten%27s+Kitchen/data=!4m7!3m6!1s0x2e7a59a8d51f9435:0x992683c37da1bbb3!8m2!3d-7.7844208!4d110.372112!16s%2Fg%2F11h0y9nn7!19sChIJNZQf1ahZei4Rs7uhfcODJpk?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7844208,
        "Longitude": 110.372112,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweosOhKJ_zM_5nHp061mehOYWzyiDMGFoJ3wOEuFWRqNrav8NVKzL8t7JX6WOSnsrKuN7K2RzVwmw5NqBt-xJM0qWUXUCV5Y5jvux1msuXRbY6zagSH38Gb8WXV-zLHToSKlJRpv",
        "Additional Images": [
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvjoCk6IlLVUqfoOv-YSfuIxStRB1vwwZdfckC7hVBkryQyyNFe9BhDjrOdB2pt2dFBD6IfMmGtDITmCCWOo2D2I1YOvgJuTet5_GGdyul1xtlZ1wknz1ZY-eoxGXMdewSa5jxmiB3dY2Fg",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9puttrd_mlV655R5I8RwWNsZW8zI5zBOM1azofGj19vdBncR6rC3MyUP5OCAqbSBEj4aNPaKiHko3c2i8MR63dY0cIaRw2I-rmghMXbm3jnuzbtHos7twwJqWnh8ZR-XgiKg2_tyxotaUblX",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoZPLJDTwZT09ZTrs8nmO7qZYTXtJ8eicHMpUhoxyITDqggoLUO01uakzPMmI4VIveVVCeBACNnal4tPhRm_qY9M3a5adFgLNhNftbXdl2YhebnLRyJaVtNelFmRVmOpRugItk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqlSSwp2n_AD7OdwKBTNpnRz5MwIhWz2ACmn50IZ37mlvaB4NdT-jo4FqPnieI5MvNh55mdZg0ukcbxgD5BKKJ84VmEqyKvVGKRSmZRmWazjtDQarDwMQVJD8qXb-LZAVl650VPuaO1mA5m",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqVqxjNpF89nc-G3vPbGpTtabHyyK9txL8SoOe1Xl6LQO59zKpMrp2Los3WL2PUX_2uVn2sUpbVNXdKttj07hyB5sa95g9oVHaLpI57MlbVttFeKAPxy_EkhJF9VNTTFxLz4-weWg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqH-zrlIUWtHVX3kLAp3Qj2G56OmmSeUuvtQOmVWVFO55GyzBOKRifDn6yWls8JwyATS8HhdrF6wBi5XqVQyaZnvLdS-IjGqC0kWRfBv1q0dnz2FMQMsJ9YDW002Q3ba6FblGFibS03ZXc",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoVoBfoKoc85uBHD9fMkXMnDCTlwu-3PfVSUn_RinGhakmcZ8macdVaV4CankIapYG7ltoGk_sJe_gtMF2ZssCLGi7-VbEi2jpSDeiK8Bm0logAeGvKa8dDdoLOItWxdJE-mD4",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerIWlcW91xPGGaEmMtOvRNWuirfadQkp_gJqJxdXX5TrIrnsbsLHGmuGcCCMjxdY7JnjDVGHkwAxxbUrhcq9rZ5IWZ3SzvTY7o1Pp9MGPgxSARRH--_XTaHCTJz06d9TvTCOm6seA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweokk3IkaTKOy-XKBjkEhegvt4EMf3Jv8oueCJbn-XgxA8lh5LBTdE2JP7-IRwf61VJ77S4dIA-ZWXS24ot8PNYdzn0_pdf0Y1XYL7umPhC_Ed49U_t3rRxq9cDjeQ6TSMp-jk9foiiVAhk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep8zxQpoy5uTRHs6UUX_7bU_XkukG0e7SZvjQ_FeoJyGPjewGGRZLT07Va5mdKRkjlTDVEP5c1Uf7jlnC4Stv-IZRma1O09IwPrEpXNaQnInvZxAS9lO6qQUtbQSpQVi2Zv5owP",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoaSedsGD1IouOgsYy-pzqNIdl56VKgd3y_A0uuf8eIJFhiAlpOHKinPc7X65qqBQcRfp3GrqKSt8Q_MrPm9aY9oVl-sBL-eZSpdY1jvKzivzFiiGUeFjPTA6W8VmFurQdic5WnKe5YlOE",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqgm1JSSJJldmX-xAy2VS1Osj5I55hcUQQSoiSfE2BVp_Oppog9KopGAxiOi2bG3S24IcYcZ21qLwBTx77RwuFl396KY3HxEBnU-fBH0N8Idl5A0Bq_v4w6ugvdLvxnTMXTeXnQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcb2yqhfeHIiRMrYJqZzf2GkMnF4aOGL4L3BmrxFmQT4uK3lic9qK-Mu1EcxgbqfL0VgN2Z1L95lhENM0W-HZsKGPIzaJPURmkcnwRckM-r9mPeGA0wo9WH9HOeGenjPh-QFg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoPvfxEPPWbilaYGpV_OWJetCppXZdQ8cnzPaWW6M803yFmQ5DTcrZViQfNqNccJnTLarTh07pRWH0tDSJlR59cnZzpgYKhJJX7wrcWiQXgBla0TuWHgOEoEMQRnobGFuM1TJQ",
            "https://lh3.googleusercontent.com/a-/ALV-UjV2YYS3tEdB4QHeh0rl6LWrEld0Q5Q1_mLWQ1mImUE3B6eYIe1fpw"
        ],
        "Place Id": "0x2e7a59a8d51f9435:0x992683c37da1bbb3",
        "Top 5 Reviews": [],
        "description": "A popular Javanese restaurant known for its traditional ambiance, though specific customer reviews are currently unavailable to summarize."
    },
    {
        "Name": "The House Of Raminten",
        "Fulladdress": "Jl. F.M. Noto No.7, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "Street": "Jl. F.M. Noto No.7",
        "Categories": "Restoran",
        "Phone": "(0274) 547315",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/The+House+Of+Raminten/data=!4m7!3m6!1s0x2e7a5831e4074603:0xbf9157808e91c603!8m2!3d-7.7851643!4d110.3713574!16s%2Fg%2F11b76dbbmp!19sChIJA0YH5DFYei4RA8aRjoBXkb8?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7851643,
        "Longitude": 110.3713574,
        "Website": "https://raminten.com/?utm_source=google&utm_medium=organic&utm_campaign=google_bisnis",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepSpvC7ufFlRkNHlBoOFGUoXmMkBMSbNd7W-oyBToDHS7S78MQNiCRNSGPpFk4t2VX9_ebY0QVqtEnNTDia4RMVPPdZO2JEJqmN9mpMBCOS5BSuW3f1wItnVJxwzrcazwRGtrql",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweocDXW8fuZ0BtHyuvduUfgTcX15Z33q24r6aD4jbwfD26WbHI1S640L7mNpq1OOpcTvhZjH5S82IqPM3CwQFIdVh6vWpURskLfVz7vGH2M0tNDw_QMptKH2FId_5cI_t0hxb6MnQs-8ygSX",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6hdwMoitXvMQK24_t_30e4HVjgNWw_Qih2EsGyI9JnFNGHGezL35z7rXDZitSWHnNSnoLSeFizAy2xVE90FFh25hqsK7pi7RdfhMLFVjGnF0R8UABVNnikk6p3qoZ9RmqVqkjVg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoa0EE2EHNcGgaundFXfdRgzP9q2Frd5DPcDeakSCd-OPkzS3JCSgS0NzYiwg3ceqXFLZHbQE28VZVIRFXr0Dl4toGMUP3cgf2JwI6VEtNaT8yBRX_IcnqICPhCn6MJSim-BjUb",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerVN5CSvKUEP-b21vG_goB-gti0ZOOX23_GP9lfahYG0MNhNVZrOsLXxoMPZS75BWPiX3vcWTvTVH0tBxb4uD9ThoZSHQy4XKzI85BxDHa4VTuTRAt7j6nQxMs9Njxnh2l_OQ7eyGvX51Ig",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqEbNnETRZnMdONi8CiH6Q2ReiINKm0lH4Qpwvg4fJMcz3_ZxQo5XMatb_Fmbro7sk9k6DV4A1HRrQrsZoOiXh4nUYLX1u4OZDHxTbFtTT3gG-NdvKKWOVfZxMqEf_FPx1kfind",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer12Jz3XyKkU9thH2AJrFipeys0Fcjrfv_ARp2jaG8wXk3p_lBnXm57WOKr5jjurZDhrezsQK133lsSpE_imsoKAALGa2VfVdUncDO8RW6TWN8K0AS5A3jtrDQs6W1sB8MTuXBoeg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoSBSk8lzCJFOQtQCMJNRDsipDrOOgGnwx4Tl3bYznGgK-mxYd4z0zbjdAMqIY5tWfobgJHC_u1URfNmD_vRMPfLXmJ0WcbXFr00Px8vcZTK2HXLA0izqzSCTy3LuwQGmkoDc6YSWyiWBHn",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqY-HgVca9cFtd8IYmDDFOTk9Tl7MsQxnCnvlS_bmcngqyWbH9EcnxQiWQC-546L_EFVJ-z3jHf0fB1_wMNFYvqaWmIkYkYrI3kXLJTPA1hXEVAlY24ZfAuVw0Gc6D2y3gUUquldQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqgdBTAU2iqO9DGl0sQS8Ni6GsKSlJ9vDVr952K6bNxBlgFmgnP0wBv0tpcqXBXBJ-iQ-Y7KSkd5GQWo_9dtWRqnoIhzmvwjCIM6LE6p4NvLhxTZAEPxF4m2lm6oPMHfQ2flKZuh1CVBQMY",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0MA1w2GjFV-gR_49O5aIsyTKaVm7uBHWbCr0dBKf3rEWE6QYLL89Od3Xjt8-LEnQxyrfnLpqUymYhgTy9KyZU5fJpxdOO_J1zxfxSVzAWcTXwOqDLCSqi9xIxsMonpfImJDzj",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqxAx58e2Cu_9qEQR4xGS2f149SHcPwEgpIzwmfyHHJCUYK2ta-HH2TKTaERISoVSsL_4NQMhPlpbH3F-ZhqkWcqV1UCui2QIpyUBIABNxWQ9ZoTzAeuGufHXIIkj41o2aSBjPb",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepfwBYZNfVpSNKXxabGuV7JKVPfUz7pDSa01qXYx8ZQ0t3eitSuryBywY2wA2cCmtoPwqoJDN2ifgP7zbxdjRT8byiFFzyd2aq3ON-SJ2W2GWufI630G47WXmFUvxF1vckV9wp3",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerb8sza--Nt7tBq4c7okF7Vns-Ii6Am1ggoBErWG68-zvBwETWXSqUG8kA2b0FqlpoF7KmtnUhc3GZ64y2I9By0FJWe963mkhkYIWDrT7-65IROR9KRzul4FCLIhcj9Vn0ZmCOQnA",
            "https://lh3.googleusercontent.com/a-/ALV-UjVW5GOAzaJMBppZBMctBGZ_IBxbQXV-Xq7QW_x4ZF6_bwbKwVs",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoZURLxJDAWhvCNzbrSXWakf0D70wEa0pVU2HpHaOoJ9EyaLEcSm0CGDbwhEC6EnYGn39anlthgAszmLdA_UqqMXziFunCQglNMM1J2cxrhnpVOFTRsZutyoJ9pnhTY6zJr1Qps"
        ],
        "Place Id": "0x2e7a5831e4074603:0xbf9157808e91c603",
        "Top 5 Reviews": [],
        "description": "A well-known dining destination offering a unique traditional experience, though specific customer reviews are currently unavailable to summarize."
    },
    {
        "Name": "Sekar Kedhaton Restaurant",
        "Fulladdress": "Jl. Tegal Gendu No.28, Prenggan, Kec. Kotagede, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55173",
        "Street": "Jl. Tegal Gendu No.28",
        "Categories": "Restoran Jawa",
        "Phone": "0811-2666-252",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Sekar+Kedhaton+Restaurant/data=!4m7!3m6!1s0x2e7a571a976e322f:0x1ad28d836c97d84!8m2!3d-7.8270391!4d110.3927971!16s%2Fg%2F11xxm966s!19sChIJLzJulxpXei4RhH3JNtgorQE?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8270391,
        "Longitude": 110.3927971,
        "Website": "http://www.sekarkedhatonrestaurant.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepkepDyB3DqqPrfLP_lCOebp_48kGWJuKGgf2e21oEKQs2Lkq4DAKD1Y4gWQbKEwSCcdmZEpbrSqhJqduY0-sYSVIY2LSYpfvDLx9WkPoxEsDX0kHNqEJ5ee9w2G895eAGegcB_",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoa0EE2EHNcGgaundFXfdRgzP9q2Frd5DPcDeakSCd-OPkzS3JCSgS0NzYiwg3ceqXFLZHbQE28VZVIRFXr0Dl4toGMUP3cgf2JwI6VEtNaT8yBRX_IcnqICPhCn6MJSim-BjUb",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwereK5vN9wGkQS0wTypREVp0x4Jaov7RKfBoxW5l_zIYrJ7rG4F86P6D4moSbsyZTkkaEdGX4uWnjzyjy7a_Mzo36bmX3ywGuc9CAumwxLnM6HcJQCwb2NiANAUMWE4nODvYS5U",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoCJj_ndyhex3MW4nZw0nigzgJS_jylkCUZWsy_qhyqLh2ccvY8O2WERAV6ThNw1uM_538E6xEgUu7UpenuUKd_zCnGlQiBuWYl4fJW1FcnXivxwv_Hbt4TyeUxOLCRttbKHtg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweodvHl5txzSJMSWshNDFHCW_AYS_ym6nPyJAITzbTpmr_A8xY6oHhZpWnHIMswtKge8OvU_vTancuchrqqBjDQo_xIZ-OfxqqCIPrdF0otUrHnLv5_tbejfP8dC33S1xfMUITM",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep5GJ9uOoXtkmhee1cGOjfs6ibH55ToMejJ-OqoXdSJM2KF7MQYP62GURFJQ_GebzUmhLsWFGRA5TM5NU1r0CYD3kIhKaL2Q64f61ipJQhV-DshhsjxMQUiG1esv0Zl-s0__rcMqA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqj5VVUT3SEufVR1w_OzNaqfuabRT3nna45OvHk7EmFvpSS2JmF59ImIrAnPK8_QbcwMHLtWzJfpJA6XUJdvCev3U3HN7jf7s2ErZLi-wXpliY-ul7NPl9TX3pMOxE1em7VQC4X2n_WtWJG",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerHgAupOpgJAfy0A6g6stWq37IYhss77PhTT1M1JcpPhd6hAP9vGwslC47CgkB-kvOMuLMKaG0j8YIIsTIUSVxgUWTGfMdJawn0sijnDOR4QqaXzzIDZbWB-T1PuBCrQCqU6HX9uDUtaDCO",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6ZM7oGAhfFjnnl4gLUR-OL7vTWwxwB93bozMGe4RtmcNbtRZCwMBGLZxuuNJx3o4nA4e3HCUYPGEIg81UDbP775XUEi4AHtDHg3TR7ZNXo2jjkik62f8aeNyM-Utq1UkMLg_U",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwep2_q8pKKZIUuTDeOvyPbD6XuXAcwzJarvyihvX60USaMvfexDjAeMkntm_KBoddsgxVJuIjWQPZKBQ_47O8qKtAdDdxOWa0Xypg_i_EwpDfoH-ZcPUH0eRjDTGVr1JI0i7tKDqQQ",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwepcdQKPR4pMbjYJ8S0IDBF64PBxQE6DOhCuulgbook05lUsF2vPn0xspTsBLdzPD5IG9cTUrYa5pDdWDmq2A9f7slekeFHhTyO23d41KBibLrAefkSHCDNOqMDqBLtkP4pjHnOsOQ",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAweo0yhwt4D3_Vilt8T3brTC2dWYf7kN4qk1vV-p02HGRZUVQr6y5Nc1DJWZvPcJHTzr5oY7wbTJeM2DeHIpfZtBguBQNlZBrhqg1FMsVW3Mh6AXZNy7d7YfXuO0BGIh6kOHYdGm0-0R-IsI",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAweqB3k-vPS6ZTxj4O8dtk6yTmcROrN1t5bdKTozpZm5VB3uSf8bywR6FGn6s1eehqgsH9YHGpHgNC64NgtFVG_XTElBeYsLcdNZt1zgR51cY--krETdew6xgPc9bDwB3QbQOlXLs_A",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwer7GR1PLja_SuPF5-ALt07HRfmdx6Xxk5omtbeSE_MqWls0RLxIAjiHqAGZUrY1JlhFR6n3-GlIMqGglqnx33eBEdoCt2AE6xtRpA28GMsUFGSK2j7NP6fReVDCop_i_nKfGefh",
            "https:\/\/lh3.googleusercontent.com/a-/ALV-UjUrBPWpLBAog_lCaxLSdmIl0C33JYb_EuLv0vEGpSdeh_Gsj_IT",
            "https:\/\/lh3.googleusercontent.com/a-/ALV-UjXNhQftV_z8UMV7iGGPh_GhABfj1Tx-Sg7pk3j6KiQsdjJNB2uz"
        ],
        "Place Id": "0x2e7a571a976e322f:0x1ad28d836c97d84",
        "Top 5 Reviews": [
            {
                "name": "andre nosavilla",
                "review": "pertama kali nyobain bukber disini, walaupun konsep all you can eat tapi tetap terasa nyaman karna tidak terlalu rame dan area nya luas"
            },
            {
                "name": "andre nosavilla",
                "review": "pertama kali nyobain bukber disini, walaupun konsep all you can eat tapi tetap terasa nyaman karna tidak terlalu rame dan area nya luas"
            },
            {
                "name": "Aya Harun",
                "review": "Salah satu restoran mewah di jogjakarta. Tempatnya nyaman sekali. Pilihan makanannya jg banyak. Agak pricey sih tp worth it lah dg rasa dan  porsinya."
            },
            {
                "name": "Aya Harun",
                "review": "Salah satu restoran mewah di jogjakarta. Tempatnya nyaman sekali. Pilihan makanannya jg banyak. Agak pricey sih tp worth it lah dg rasa dan  porsinya."
            },
            {
                "name": "Adiba Lubna",
                "review": "rekomendasi tempat bukber sama temen or keluarga yang ENAK BGT MASAKANNYA plisss, tempatnya juga estetik banget, SUPPERR RECOMENDED \u2b50\ufe0f"
            }
        ],
        "description": "An aesthetic and luxurious restaurant offering a spacious and comfortable dining environment, perfect for family gatherings or breaking the fast. The menu boasts a wide variety of delicious choices that, while slightly pricey, are well worth it for the taste and generous portions."
    },
    {
        "Name": "Gudeg Pawon",
        "Fulladdress": "Jl. Prof. DR. Soepomo Sh No.36, Warungboto, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55164",
        "Street": "Jl. Prof. DR. Soepomo Sh No.36",
        "Categories": "Restoran Jawa",
        "Phone": "0822-3315-5497",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Gudeg+Pawon/data=!4m7!3m6!1s0x2e7a57700347cb51:0xed0b575329f65c3d!8m2!3d-7.8056773!4d110.3901511!16s%2Fg%2F1pzpwwrgk!19sChIJUctHA3BXei4RPVz2KVNXC-0?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8056773,
        "Longitude": 110.3901511,
        "Website": "https://instagram.com/gudegpawonjogja?igshid=YmMyMTA2M2Y=",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerYFis4MTAfSlno2dh3d4uLn3FQI-_7FJNCpqOYdWhPpUkRMPwfGAnfX0_Au2FuUW3_k5KWAfnOBLeOhywi9KMpqtmB8aUqS8YcRNbmCCptrCE6IuStyUSLajB8Ii4uAkQhzozu",
        "Additional Images": [
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psdF9UtS1uAUQjun01f--VB1-wZkr9qjBK9yKvX22AKsftfShFJikONIWWGkvrmTZCPlNvuGO11_v1RF5A8TD81k4wuipcDGqE4YCrnR5ceNJffQhjXLvbRo2-4g22jjkbMfVlRh3vskSz5",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvW2FGZIAOjv_IGr8BkKo_rccCwp30AAXySf2kkrzSxbaW9rjAJdAj31_J7SjykM2DkjJgQf_Nq9kTVSlUM2G5RoiKWqoy2BD0Ny9ovmvmqfIpW2UmDUryxHSWGQHKk8MvPVdTXerhQQ64g",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptJr1K8qJTMQYSkZzBdBE1vfaYcOmcEWMnPEgoXc7bgzTBzbLh0KU_v27mBhQYV9yIRjaIDQ6T_rkWdO8yWHklMVn_EayBQNEy40c_FOD_tcQ0Zna50iPiQ0nTiCww1KJ30dPRwNI27pDpd",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvD7i5ggGnCk6UsBRXa7XaztkQYNkP__JyqrFIMyqpxpv9h53WgZeu_v0aZJb_FAEdnt14AkEd0z40roarKDG29HQs_uu--jnlaDcRM5_U6Ki8t8AfEQ5g_z93fSx8rXFJOkiVvRu7s5JOt",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvLblE9QPozupAXL4jRCK5Udq6R5pRiIpwnvAsJdQtrLlMFuAFIEBC0-0zd2t7q7dwASDGQbYKAsbfXf_6-1jiPYUPGMaRfI4POHfs4Lhy0Db8r-fQChHvbbXFohal9MJcl8gKxWDdgG03Y",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer2E51T6LHvO4ho4C-AX04qlfEnEstH2sZFRtmhJohD-tSxxTMPoh46sCm2D9ceb1LUocYvX-5nLB5sNzHZYiaCDXptA_d6etCJ7ZJ2FEFGzSBQPbUwQaye9vs1JywnmQzYC7-RIg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwequYwPDOMCP_CQaCSLZ3NaaRWr7shn1LBqTnWlSGajbe5K3XOc6ywlpYLy4AmHZH3CvFFUroemaWinl5zSpNkDM7l96Nqy0VRAn9PT1sRHcP9UcKai9AaW3iq-LA4yi8w3TcsTH",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoxvDqunSfA8AKeU8u9nOUAqi39yr98-UGDCM3pg4LHjQclWJds5CHiax4xUCkXqrHBoZWzCIi4A9G4ijTPS9SC9RAQokhPExQZY3Ai2-BvS4NKgjSwAwFrwPMPMTs0gpRRreIM",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqkI1AZIjEnpJW2DykU1vB36T7xg6Lg3S_vOS7mYxDSKSmwRrQkvKFuczLPwn5t8xjfNnhw2Je1UKeJ6NKouWXF0TY7y0V3dcTL2DbdPE7cVocGA_0HHXckPax9pwRbkiUEl5swTPOoO1sr",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweotcKT9dt2ClJBNAFUNvXyAxdUTIZdWWcVh-LsKvxXInp9NKb6UMC-RuBT5KHOk8lc_m83Sd3kZwGqm8TiQ6LKL_iNcQaBWXJ-7Eosc4NyALTCg8I6XwnfFmYe2mqYFyEgYs3Kt",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwers4x0CXCUOCH4OEiVeoyeaqV76nd9V2sD9SP3Q5MrlZpPrycWeDBXWaORUkzTs9cOh0esFYsTFP9RU4wbidC6lkd-5jK3jh6nj5LswXdFW-LKnBT6TY52H6_a7ZWUP1fFeRwM",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwertUbOQY8gAJ4LqtqJyvgG8l1KhcQKBAmqhVTrlDX0BjEvh5lSgqF0srimD0lXXpwEbzRhkLIREZ6VoZeSKYaIQ2B0rSmXO082tZNi0WlYzZQS3gbtDePYD4a0fnVF-s82KP5lcnA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqllDRPDT7dHbJfg7ZAvLJELyTcWpGOZ2aKJ6ow_0PfGs0I6H7OUx0rpFpffjt6XT2iOXi6Kf-ItQSlywfwoQ606ybq-S5Td8ECgupKML_865lPQlZwOwNoryCyVRKI9eYAnUAs",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqX-u3tsrWtH2EK5vgybeYRZvHkDfLWqaTiJve4b-oQ5f18ln69up-ZGj58DVBlejfEbz_7pj_x3M2_ZlVgMWYi1lFCMy_FbiDr0rzCpnnBKAiiZMaXAU70vkSR79QCLhC9Jbe_",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqDpOBukEhoQbCeXQibwwNa8vKoyRG1_QZ4PqAem2G1wYJm6n_Hsb3qP-tFguTpRUk2gGrX6UvnCNF85ZeyCJ1-MyHIl_1haQu8y2WL5Oga-aHy94QFJZS-cM8W5H6XcmHPMigara7krRfi"
        ],
        "Place Id": "0x2e7a57700347cb51:0xed0b575329f65c3d",
        "Top 5 Reviews": [
            {
                "name": "Djer.Dolanan",
                "review": "Gudeg dengan ciri khas ambil sendiri di dapurnya (bahasa Jawa dapur = Pawon), bukanya malam hari, gudeg dengan genre kering, tekstur manis \u2026"
            },
            {
                "name": "Djer.Dolanan",
                "review": "Gudeg dengan ciri khas ambil sendiri di dapurnya (bahasa Jawa dapur = Pawon), bukanya malam hari, gudeg dengan genre kering, tekstur manis \u2026"
            },
            {
                "name": "Michael Vincent",
                "review": "patut dicoba kalo anda ingin menikmati cita rasa gudeg dengan lebih unik dan berbeda.. pesan langsung di dalam pawon tempat memasak gudeg.. katanya sih pembeli pernah \u2026"
            },
            {
                "name": "Michael Vincent",
                "review": "patut dicoba kalo anda ingin menikmati cita rasa gudeg dengan lebih unik dan berbeda.. pesan langsung di dalam pawon tempat memasak gudeg.. katanya sih pembeli pernah \u2026"
            },
            {
                "name": "Rivani Rahmadani",
                "review": "Gudeg Pawon adalah salah satu pengalaman kuliner paling autentik di Jogja. Di sini kita benar-benar ambil makanan langsung dari dapur (pawon), jadi suasananya terasa tradisional dan unik banget. Gudegnya lembut, manisnya pas, ayam dan telur \u2026"
            }
        ],
        "description": "Gudeg Pawon offers a highly authentic and unique late-night culinary experience where guests are served directly in the traditional kitchen (pawon). Known for its dry-style, perfectly sweet gudeg accompanied by tender chicken and eggs, it is a must-visit for traditional food enthusiasts."
    },
    {
        "Name": "Sawah Resto Nologaten",
        "Fulladdress": "Gg. Melon No.168, Nologaten, Caturtunggal, Kec. Depok, Yogyakarta, Daerah Istimewa Yogyakarta 55281",
        "Street": "Gg. Melon No.168",
        "Categories": "Restoran",
        "Phone": "0812-2681-7789",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Sawah+Resto+Nologaten/data=!4m7!3m6!1s0x2e7a59ea85c653e1:0x87066d86909ae032!8m2!3d-7.7757771!4d110.4030884!16s%2Fg%2F1z44xyn61!19sChIJ4VPGhepZei4RMuCakIZtBoc?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7757771,
        "Longitude": 110.4030884,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepdWr4tsvh_O4wmIhSZHjHtiuYx_QUUrh_I6C-8SqCxB9SNV-BhHsA9e3nnVpv64j1YhNaFY0VdRgNPra1H7E26AqWeJ4_oT6wa9Ik75vkNrvn-e2qigQZZKuF9xW4P-UVB4J_Imb4ueTg",
        "Additional Images": [
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptqxZgINZzca2rr76_At4bd0Nyk4DFEB3YiMKyRHavDoC07mOEMKamFiD4UGhmevoMjEexohBJpqj8BlJ-dzbIRAPi6K9m5zQaZECMuVk4WFzbR36nvxtVL8YzSCAmDUNrN-iNSjOnqfSc",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvZ05vPvrcK1hUk_uymEuSDj9EozuczYGskI6lm3kdPAi-l7x7z_kSaVQhdrFfEfRnmyqQVZvqG-FQTG2SUk92Sat6HO9vv4fYvmgceGMACsAUrkvPyLcGKYOaqGxWAM-byAV70gCtDob5i",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psz_4oe2mCuNimIRuoYn_EzpFiQSYDecwKIgTVw1qpu0nzH70aEQ_VCz6tgNjh6xLrGRAKmA1dyezSChnFtoapyv-LSsYX_EyA9T0qplQaZ5tm1RyGvkMZAukYlxfS_7HhtKpLMtokTkOle",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pv8LiMThsimRG7AICrMFPvN4MhnpvFyWjs_Jo1OcuCLFevL-XOA4HQd1k5MDS30ijskiIVmZF8b-KGlHrwUc0LNWVSiOAE4cKSwKbgZHhqwr7AFXoIVSFpw17BITvbIdshx0hHOkop3Wtqj",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptvRpGyYcgkSt3yqv0MWdh3C25fu0JnoklAKEVHgBpGSjv6J-JUL26SXgaEA8XNnT3kG7L3CpImvJ5Ls3HLBFWh8FejRc5OUpSiLfRPcOhE81YTtmfc2ijdiLXkFbR030QcM81N0k-DMCRU",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6owRIUJtE4mt8lfskOc22woQMywvBKblzW8ywA-dhAzX4UWpbY2Mx7-Beq0A6aODIAap7hVZ_azDyjlUnRabRNVNQdg1GgyIYP02Zd2VEqO1-OTEv28Cx3n9e-CXmyqvGr9Tnsw"
        ],
        "Place Id": "0x2e7a59ea85c653e1:0x87066d86909ae032",
        "Top 5 Reviews": [],
        "description": "A local dining spot with a relaxing atmosphere, though specific customer reviews are currently unavailable to summarize."
    },
    {
        "Name": "Warung Makan Bu Ning Rasa Sayange",
        "Fulladdress": "Jl. Jetis Pasiraman No.11, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
        "Street": "Jl. Jetis Pasiraman No.11",
        "Categories": "Restoran Ikan Bakar",
        "Phone": null,
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+Makan+Bu+Ning+Rasa+Sayange/data=!4m7!3m6!1s0x2e7a58370e032687:0xc8ed89a3a25266dd!8m2!3d-7.7785531!4d110.3685189!16s%2Fg%2F11c3sswc49!19sChIJhyYDDjdYei4R3WZSoqOJ7cg?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7785531,
        "Longitude": 110.3685189,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerR7kIy7BrFvTZXmfCvs0g-ezUKwQm8WtSpODdWNvGBw-8XRFonYI938PGO46fQVsUqlB77DlzzGdvR2DFCEpT8KOC-rRFEJGEUj9j0r85PqGDRPli2ggfh-56msScXOwXuTbw",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepSpvC7ufFlRkNHlBoOFGUoXmMkBMSbNd7W-oyBToDHS7S78MQNiCRNSGPpFk4t2VX9_ebY0QVqtEnNTDia4RMVPPdZO2JEJqmN9mpMBCOS5BSuW3f1wItnVJxwzrcazwRGtrql",
            "https://lh3.googleusercontent.com/a-/ALV-UjUytfIspcquY4irxdP65fXMe_l2W0ss1rPvBLxEo2aCVmNqLoE-",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepS5SRoDYQfMCtB8KggYw-o7OoK_hYnb0vKtfb3TCwcUSnOq09OriyemA_YNy_jNOeUFDi_7u5JUF4Gm0lIHdv6GYMBMzBiaQR9nAQn7DfTs_KtSJLCGLPpQAlcS2qFxgcGfuk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqzi9X7dnu2-aFdM4pg9rLYL9hgl_0e7NWy4yKDSsh1-0fa6_k_9uMkYpX2m9552qH5COj3fXWFHxLiMVBLZDmvYs1ETuEMBaN4RdOruC-W8PTUqgz7Vzrh1vpVqnQhGJvMLV8BxbyT5BM",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ps5JYQXQ3g_NI58ghlrfhcAs4mihAdXZexJUdnf0ZzUxhq7pj8Rn75ipLyj_wFtFxrDhFLzxp2PjO6F45dXzJzKbddqh9kHJEthm981if_qsqgApPCzFxi8MluSW-3lVVPoz1pbKFzHt09K",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep_DsCwkbrgCpjiJF9RZVLFj35NM4hl9oM_ORCYHIWtfpN3wZDg81YGMxc3pI_u0NAFjA_II-e22CqQ5AZB-Q_2bOvhxuhA9tzEE0tYUymEdviuU4NgmOcoplIpgvOT9cl5wFH6",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvlSvJNiYVDhCZhbw-HjVprZPp3Uwe1ODEAsH-14Urxbz7QjF-jMLVvxWaPZqXcGsuxCHlHxcf-GMlG7WHgmUo4KYb2jdr2bP7V95fW8HY9Lf5QA_illkAI7Uj9r33Pfj-hqwgGpg-v3pwO",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweok1KQkxrC-rfXXG_EkaUThU5nWW1-lxCt8RV6NR5fef_0Gp-hCsPVLAzeM7wB1BoLslQFnwEOCMNF7zmgW5-BdfHemLisTqgq-ppxYsd_gcgG4GgtmwtN2En96HisoUX-HO_l0",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvK-6GTFEQIbPTeU_CTKyb3LFBjz0e7Ubo5UwxpY11DCOO1phYPRSy6YY5668Nm5jQpSZrGAh8XJG8fm5sDs5x5w7AyrxN2LoigFiQk_e3DZiJkqVo2B1OdcPkSGRuMcroi8KkE",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep56gUP5avy6i3iuX9CrLEHuZyxIZENwIQbYe7feFuXcuvhiZBV8Va7OLMqAMYxZkPYU8ypDcQpRaMOfnmXgdaAHtKJraSxiKSfmXJ_sEv-0M-aZDgN3vTkuHSVEC36dMK4Bh3mag",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoE8vKH0xdDHfO0qIC-Vo0V8EiX4jxxgksD_siaF0XVGaM5GiUNGxI7sUzfHVkJbx5EUweAdnpol7KeaX4RjqI5h5Ye0WZ-OMXb1DIl-BD7mumBjbzGmCqW9zM-1wA6LrvgH6kuEDe4YP4",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptQpOdU7ev6D7qoNYIQ8uzDvh8RquKoRexy8Y_2AwsuDO0BeaIxT4BMMR2vHfAMvv4ja-nWdKv-Bj3IzogY8gE8z36kLUlnvgr_h7DcZQ93dqKuagzXfoZjqJaE5BV3NhAKuOkLPQSOM-pk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqR1sgNwEfluyTkNlgicPl7sFRVYNW57eOjUbABdhn_vfggrPNn6rn9u3-eyocI7NB1SqHrUakpCgLtNL66A_ERZuEvzWVRhD89Xj9cpJyRAxtFnmq4Nn5nJyaGhtqqbiSyNDLdRQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoJ4pK443XlcYMDuuxaDkJ_J_YJeQOoAT3xou18c39nbhtXpK63ym6KlOYl7A2huMw2cvZp03ZdoflPX0w57ZPsFdaE72NHVTqR_ZibTsrQWh81uP2Ce2V_9WNeyYc6rfLkZLg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq94Cl0Zl2my4U1-zghorXuM8G2dR49ewYEtLo4G5zjSLEI4sMqYdfWsmF_obeCGFS3Uvi_SIHCiA68tN6AcoMg5jNNKf126fRBM6rc7EZjMMYdbD9S3fH0jK516R57wyQZqxbi"
        ],
        "Place Id": "0x2e7a58370e032687:0xc8ed89a3a25266dd",
        "Top 5 Reviews": [
            {
                "name": "Oky _29",
                "review": "harganya sangat bersahabat, resto spesialis seafood aja kalah murah sama di sini, makan berdua habis Rp170.000 aja, tadinya dihitung Rp180.000 tapi karena minta pake nota jadinya diskon Rp10.000 \ud83e\udd70\ud83e\udd70\ud83e\udd70 \u2026"
            },
            {
                "name": "Oky _29",
                "review": "harganya sangat bersahabat, resto spesialis seafood aja kalah murah sama di sini, makan berdua habis Rp170.000 aja, tadinya dihitung Rp180.000 tapi karena minta pake nota jadinya diskon Rp10.000 \ud83e\udd70\ud83e\udd70\ud83e\udd70 \u2026"
            },
            {
                "name": "ajeng maylina",
                "review": "Tujuan utama liburan ke jogja, salah satu nya utk makan papeda di warung ini.. krn d bandung aku belun nemu warung yg menyediakan papeda dan ikan bakar sprti di sini. \u2026"
            },
            {
                "name": "ajeng maylina",
                "review": "Tujuan utama liburan ke jogja, salah satu nya utk makan papeda di warung ini.. krn d bandung aku belun nemu warung yg menyediakan papeda dan ikan bakar sprti di sini. \u2026"
            },
            {
                "name": "Mr icank",
                "review": "saya pikir cuma ikan bakar seperti pada umumnya, namun setelah sampai lihat keadaan dalam resto sepertinya legend ini... \u2026"
            }
        ],
        "description": "A highly affordable, legendary seafood spot renowned for its delicious papeda and grilled fish. Diners frequently praise the budget-friendly prices and authentic, unpretentious dining experience."
    },
    {
        "Name": "Restoran Gazebo Garden",
        "Fulladdress": "59RC+P52, Jl. Brigjen Katamso, Keparakan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55152",
        "Street": "59RC+P52",
        "Categories": "Restoran",
        "Phone": "(0274) 375705",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Restoran+Gazebo+Garden/data=!4m7!3m6!1s0x2e7a579b058c38a9:0xad597e602c685df0!8m2!3d-7.8082408!4d110.3703932!16s%2Fg%2F1pzry8fhx!19sChIJqTiMBZtXei4R8F1oLGB-Wa0?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8082408,
        "Longitude": 110.3703932,
        "Website": "http://www.mandirabaruga.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq7trTMdjhIZ9fNU1WRQ5p9sdDevGDr-6XUF2yUyGvA0P8RX2MFnOfoSREjFEIfyzLmIsqzLg_bcosm1mh36XA80Tl8pel34LceqNbh1OWAru4UcKZT0r_9_wr8WbThHW7WoyOE",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerNxXfeys1-3jtfY6HB5OIQ0a1Kq1jjPaoGS2o7UjOcQoODKpkQietZUKWJFQd04qjer4vf8Wfjx-4pYZKg0vtj6XH8ruC7CmVtpIsC_3tfKhs94kvMBbPoIXqTKPGFWVLEwlhk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerBE0ASX-705Q6Xpe2MYUb7tty99-Pp3mPEUeBqJ5P6SKFg1gpuyK1_FubtPirmT0rxE2WJh077JgEPqmPC3eQKgwxnBC6Av-0rB-xsxy1NyRVgL4P9IGWKu4Uocvb4VvuTvN4D",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo-cR5xPFgKV7_8i4XLE8m9YsUR8aQZze79wEmBcdA9i2oFyhC9eB4q-vGxc8FKTO6VKZWMLjxNkbhBRWWdMW7__iM8g8nLuuqcP_1GDAJfxuklt2WV1SbtCvT6nNjtOxWXyaJxXg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqOkQT31ZCGXidETtT9pqRN1mficu6Hm10kfOq8HKnv1lC8lSRurXTuhhy7CfTjZp3bYg0uzNUNRz_mWCM5H-0O0R11-vZilzs58hpwawcK55_eiv2wZlwqZ6gnbr0_ET9aRnh3",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoaWCGjGsPtCUw-JLJtO1BD-AFr4lrWBqY5bHGS0eFZe089zQCgW7_x98nPmztGN38Mkhm1sES7fnR1A4G0Om51byQ_BB3xXEDlz_NQWm9dSkxFi0FB4q5UYnaKtTffRVqa2lnE",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqcWF2DEcPIGjVbavZxa-Ugtn3P7aBwfpvHVvqbiO7PBN6xYAf6g4clVMO6s7SD-SdoPuHoQQ4GvRdOZbLO_OG7MHjjS3hHoXoAC9VbIOzz43qvi8D3Lxjw7iSry8w--6abZR8",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepyeyPlSi1am8VWSl1Zd63kEIahddyxl_MtWmCNR2E9gYdL0qq8jn7yLmlAIdCmcSAFmybl4yqO7i0Zwucdh1PQMiFAttF0_FTOAIj-zOQS3oopGyVfUB7RbIIY9_1LYy2Mj6VM",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerZ1WsZomHSAK0vBHlWrZxiEVFc519lotHBan9qFlmRxTjJtbMDs_ARGEpAwOZENqOZ8QFCr2qznauxFItCDDpRB4y3VXXJQo3AEtbxjr8a2zNc9WwFTMYWQSo9tII8O8psEHub_w",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqm9PiHy1WXPhs5urK0tlDkrSK8VZb4kCmUw-iz5QPwC4qbgjgDtfpPrOv0khoZvRUOKXqAuft82hZbJx409dICiVan9iQXUiMRJfaPL-VjPC6lCDmiuOfspoq8JFWUZHLH6C5Z3w",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqw2rlvVYYIzAo6K56ZphVsvVgqUY5tTMI1PgLNWSoYwABaAhnVRzvm8situF5N2Dppe02It6Qww0ysdCpwE1UD5LXJBSTzaAaLCQzt76mmJ9nH-Yg_-MofrPl0KeqtXypOF212_g",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-w6YrHPorYvBN-lZwzxD2kqVL-ug1JYdpa1CRWSd24_k67X909e_lS2QhpASIjnnBs7B6X_I2rZkZs7gUOpouAtr_qH2USHUCgRIgAEVWo4DdyA3oBP_25MLLNvDKAoFRY6BfQg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqYn5w7_unFL4t85pzIhfXVHuYeGKMXEPXbGaaNTVUuqKEsIi5j2qQTsiyZJ-owCsMSUmm_6vG73ujAXgWyKRwhlWUy_SZlNr6nqRDcq4AbVorx-WF14b1nsLnzvgEwZxhBg8-a5g",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoj9sT0OmsoXbwb9cWG0cU8kiv2UgMZdX1auy_1L8fN6JczZ10VjTsmn1ML4hB2WPA4491qJ0M9POuAfL0DCxljKPXInNfhWpo7J63QiGXwUarrtc66vpiKuqs78v3187kFvhcN",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer7p0xwLD1AXciwPLEVr0ZxZE7tsZZ4oeud4EHD_I_Q64_SSYkaWsjAIFQVf7r_HBNyu3bp9zlDT8dn_0fmSGMK9FHuj5QiPlT_l1eaGZeZTZsqK7ShI05D3xr5-laoDCcmwm_F",
            "https://lh3.googleusercontent.com/a-/ALV-UjUhCTJGkoXY29G7S-X8gTmCzfHjSK98JW1qeNWFM9FbWVNiMAk"
        ],
        "Place Id": "0x2e7a579b058c38a9:0xad597e602c685df0",
        "Top 5 Reviews": [
            {
                "name": "Oka Oka Bento",
                "review": "Bagus. Untuk makan enak suasananya. Ada pertunjukan ramayana ballet. Jos banget seru.."
            },
            {
                "name": "Oka Oka Bento",
                "review": "Bagus. Untuk makan enak suasananya. Ada pertunjukan ramayana ballet. Jos banget seru.."
            },
            {
                "name": "Ryan Irwansyahputra",
                "review": "makanan dan minuman oke dan enak,layanan juga menyenangkan,suasanan sangat menikmati"
            },
            {
                "name": "Ryan Irwansyahputra",
                "review": "makanan dan minuman oke dan enak,layanan juga menyenangkan,suasanan sangat menikmati"
            },
            {
                "name": "Ryan Oscar Gunawan",
                "review": "Ada banyak seranga mirip di India kotor sampai minta ampun mendingan gak makan"
            }
        ],
        "description": "Restoran Gazebo Garden provides an entertaining dining experience highlighted by its enchanting Ramayana ballet performances and tasty food. However, while the atmosphere and service are largely praised, some guests have raised concerns regarding cleanliness and the presence of insects."
    },
    {
        "Name": "Warung Bu Ageng",
        "Fulladdress": "Jl. Tirtodipuran No.13, Mantrijeron, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55143",
        "Street": "Jl. Tirtodipuran No.13",
        "Categories": "Restoran Jawa",
        "Phone": "(0274) 387191",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+Bu+Ageng/data=!4m7!3m6!1s0x2e7a57bd3d22a9d3:0x807c6f9793b0105b!8m2!3d-7.8182451!4d110.3641888!16s%2Fg%2F1hf04j9cv!19sChIJ06kiPb1Xei4RWxCwk5dvfIA?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8182451,
        "Longitude": 110.3641888,
        "Website": "https://www.instagram.com/warungbuageng/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoJbgyJYlTDlTSSiaY1YZtiK7zdsYgbapn_bNNUavXYgtVM1MkNUIGNP-Xcf9v7oXWzdQCG4uCdd7px8oaWXOYFro5tbhTngmJ6eiz0iFZz9vOBiwgC_sKm0w4c4HqKOuP8b2DD1w",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjUfaECFelOsMRR_ESBQ-9mGDjaHZlau6-kEU3oUBcBn594iXVs",
            "https://lh3.googleusercontent.com/a-/ALV-UjUz17rs_0OH0oEWJPwJyovhrLp1ovJGD1i4pVUnPxlP8_qCBQDwOg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepYTno8wTfQg0DXKbR3kLw0zZ0o2VgUdb2JRIsbD9b3d_80OzAod63Ok_Z0xIfXVUngCEBS1L6Y7GRQzbTlj04RAhzdE76Nc_hSPLDAhnmNvmA9SweF-Csp2Wp96wjgryVTxPGa7A",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqoL4gHO2BTDhSiROv_IV1LVv6NEMdUFUbZQZmG-PGphjNb5NnS1cnlIk8oS_WWT7WblHNykg-iSUcJLKiUXxRW0aBbgFjD-uEWVH-pSabelEr4wIKHUG4GvEQ9PKczGm8bJjs7",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo8wYIRRs1vMFJMYALGs-ME_cF0VQlpT5H1kecodz9LgDT7QWMHdnoLtTNiXhrW-CC-f9RVQJhtnHCyIynlqEhh1sketQ0Up8iytzQ0i1vceTAi0mkA6J0ao4Xg3yxGWwpbyY8O",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqamS6b6AGk3o-PkS74O9_THyiMpmIJBKSGHMdicJS7vCzkgIWekxUQKDrVst7XvxW1gPpxp067OEDcCBiGxA8tUmHM13S-iYoDKoruU2XJqtj6k8RzdAIrK3yxkbWe7y4AKBmwPQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMQgCOHxQc4kt249W6DFoXa4DuHCUaECy9EySE-HHFvhRqF1UECyOdm_78e6x5xdsd4XWuKwZffTIxspCO-XbDF1q4XorS584kqJah0cInWyGg8aHcUU0EZDF84XrJCoITHKS5_LTHnj41",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweol3elS46PdwAbMuHpGBmFyvj6sOken0_jObDvBKAgZUrbOOkvHTun4J_WtLvm_KLWDiJCrENHpqWmacah2lOLuui9H-lCNELqrB9snUEj49fqIHiuP4rMI_MyTvXqA6CXKoqv8",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer9mJiuD71ZifrWTP_4xR9KcRu46t6cOpvKeTIFGZzV8_Wx428KpnxutUqXRI5k5z9quNBvMrD0RgreNa2zCjzuusMGBfKMVNHWfhysSCfRvL7VOKiMs-q9Gaxl6gp2ENFkn2_dLQ",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ps7hndZfV2Ew4y4pfJY0uv9u6GTPiMCRl9xueN9uvebdHR8-iFhyoFjvmVxLk36MPN4WulT5CyNC-Rg2IY0yznRsjlLb0yQFYxT5Otg-VKkmw2tiAdftcRIufOSJq33c3zWi3CIMPUy-ukF",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq4gSsQPoQh8jrRpjx_rM9cSlB-rWPyvHolNZvnJjs_HRO883twaRagUCC5rBFFxRcWxg-KVCfroYRGkF8-OTbOSM57XsDS4S3UL5W7sfAnjgKMK9ipTWOq1sOePLlKTSSffMkQDg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoG0CYroIs6FMKIBzx9LlO4tziG4eYVCkl6yW9gc4cguIrv7dnzpCoGKdAaufoFQ1NRN1FxfnHVRp7GqstWKRcPQYsn2wjAsc3cv5gkkeRzwl-EW2SoBZyPg-PrIvEkf1jedOw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqYSYiHV_KzdZfYsl-9hFY99ld5dvIc5U1Jkz1hkF7r_0VWOaIfS4IakrNucRlnWKMPKGqvkJmIaf_q7pl8TrsGupFbXvTeaqFogm3pwEwTu4YG_2BSxqbw8UHRNNiINAvSLoBu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepDHwNSSu0j6l0w8ILVCx3l1hBtRp2HZ-jgTxAgpJCZKhy86ZhAR-ErN9--uNLz6MQqtN39QRND7t0WoWoWrCXzgEybN92sCXWxekCCb7VC1ybLRQ-hvb15rQZ22XMdsovmnsIq",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweon2h3W56HDofIRdCM4vjHmmaFJnXUVwDJ4pgJDqmgvPOa8IXQmYJmgojEpKbJhzMXjasrg_7qw2PBN_HKoyO7W9mQDdPBprfE0CK5dAtmy-F6S2pb3OyLGc05p_fHCQYPqDNqS"
        ],
        "Place Id": "0x2e7a57bd3d22a9d3:0x807c6f9793b0105b",
        "Top 5 Reviews": [
            {
                "name": "Rahman the unique explorer",
                "review": "Restoran/Warung makanan Indonesia yang sudah legendaris, populer, dan terkenal di daerah Tirtodipuran. Saya kemari momentumnya pada saat awal puasa ramadhan 2026, dan saya tahu warung ini dari channel youtube-nya Ria SW. \u2026"
            },
            {
                "name": "Rahman the unique explorer",
                "review": "Restoran/Warung makanan Indonesia yang sudah legendaris, populer, dan terkenal di daerah Tirtodipuran. Saya kemari momentumnya pada saat awal puasa ramadhan 2026, dan saya tahu warung ini dari channel youtube-nya Ria SW. \u2026"
            },
            {
                "name": "Komang Pradnyana",
                "review": "Warung makan dengan menu masakan rumahan kesukaan saya di Jawa. Pilihan makanan dan minumannya cukup beragam dan rasanya enak-enak... \u2026"
            },
            {
                "name": "Komang Pradnyana",
                "review": "Warung makan dengan menu masakan rumahan kesukaan saya di Jawa. Pilihan makanan dan minumannya cukup beragam dan rasanya enak-enak... \u2026"
            },
            {
                "name": "Hendriarso",
                "review": "Sering kulineran di Yogya, rumah makan ini  termasuk yg masakannya pas banget dilidah. Pertama x makan disini ,  Nasi pecel, nasi campur rasanya mantap buanget, bakwan & sayur asem pas rasanya. Es cincau juga enak \u2026"
            }
        ],
        "description": "A legendary and highly popular establishment in Tirtodipuran famous for its authentic, home-cooked Javanese dishes. Diners highly recommend the nasi pecel, nasi campur, and es cincau, praising the restaurant for consistently delivering perfectly balanced, comforting flavors."
    },
    {
        "Name": "Omah Dhuwur Dining & Coffee",
        "Fulladdress": "Jl. Mondorakan No.252, Bodon, Jagalan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55192",
        "Street": "Jl. Mondorakan No.252",
        "Categories": "Restoran",
        "Phone": "(0274) 374952",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Omah+Dhuwur+Dining+%26+Coffee/data=!4m7!3m6!1s0x2e7a571a23afaec3:0x6597b7e90921b0ec!8m2!3d-7.8274099!4d110.3943962!16s%2Fg%2F1hc841cw0!19sChIJw66vIxpXei4R7LAhCem3l2U?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8274099,
        "Longitude": 110.3943962,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoa0EE2EHNcGgaundFXfdRgzP9q2Frd5DPcDeakSCd-OPkzS3JCSgS0NzYiwg3ceqXFLZHbQE28VZVIRFXr0Dl4toGMUP3cgf2JwI6VEtNaT8yBRX_IcnqICPhCn6MJSim-BjUb",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqEjWJP0TK-CRmNssmZQndY2gAvzgzh8p4hrTxwLpoSDCNpC9C0joVVYi8vi5cVON0KZv1ka5q8tGHjHov6f4KRx_wCWxQs9Yai9FLqOr7xYvbozKClvLNj-aZxKi9kOFqFVmfk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepSpvC7ufFlRkNHlBoOFGUoXmMkBMSbNd7W-oyBToDHS7S78MQNiCRNSGPpFk4t2VX9_ebY0QVqtEnNTDia4RMVPPdZO2JEJqmN9mpMBCOS5BSuW3f1wItnVJxwzrcazwRGtrql",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepCyRW6pjn3AKRF6aLlefqEL11pYRkfWS9pNi1ImrQ_gy3H2ecAY54wvviJYgJpNM6PTns-8rU0eGaTbk8eekYl9vlJijPjChwlbtXUNN7CmDyhaHR652qPkum03tjIZ4HqsBI-rQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepswivMKpM4cIbNLCxw56a66serSyXpWXLm9T3w4dA4n3JS635FaJtNdpFLXN1a2ATRYpQ05uF7EbmsYndwzgPH-C5-VESvt3dF9ZENsbLl74lcqfVegldKuBa40SCCM3gXFpRb",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoREao6g4akEQhcOHtljKqz9S5gBs74gXeUU7rq91tmIn3y8Qk0nn3yvpud1A3KioMpw0dcTsPxpBTYJq3F7G4WveThlogi1lQIoHBc20ARfwj0lSCKGZq1NLmCLRzmL-pMFQ6L7P3fu84",
            "https://lh3.googleusercontent.com/a-/ALV-UjVJ6Grqo7BJg4s5PIsYFVvQJaKqZ4uecT9K29b6eI14jCgOpiI",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq-0zuR5B71F6GMM-gLHyt72ZFCEoiWbQ47bgBnteP5Jx-6s2XZSvXxCczKB0EapZ5MBVvwAxL26O-NjLI1G9SjuwjGJpjr9CPUJLMUdyQO74s_-TRrxwcHF_nU_BPzxLXfUq7Zk-9Ql9o",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMclFQSXocfEjuu8XuUR9yeMQSS6mDH8n7NGI7bonrFA7ArTv89mxMrJawQzth0e1JrJA0Yak5_Ed05CV5IIpELAJuUdb21irusBVfNCTUNqxn8k8nFUMBzzNtfOUA3sG021Ea",
            "https://lh3.googleusercontent.com/a-/ALV-UjWWy-o0iKax6rqeKiTHK7eePvPslatqBnFWscyk4lDfdo6Z1Vt4Ng",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerxmggNm0LhAh8KHZQvQPPsRMgU2NUIijNebdKdTji8cnllH3V_N3ZyOgZ5W0i3fUBrKFOUTq1Bmm0Ic3pRQvC9E7zbXu0Wrazx_pYakjpM10kqOydTBQnD6PTIVStE85k6i_CdRg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweolCA3N3rIRp0sxwPZ_2LLLpOgeKv9GGmYfERmomagazWG4YUaT1AmOAWZUjTZRdy7h2jyXT7pFdpQyIfQVpgKL-ibSzNv0Aom3sf2Ffdg_gAVIVnqu5TpkN1ArvmEPx_aqjWoAtw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqIcEx5sfS3DHFdwc2u3nGXXKLJ8_E00c8s3pITXeIoTZuXpYBpI7JZrO1eZwwt263z6hgR32ClqvQJ82lfLQ4YttbPCRXHGNJUXPkRUapK0JOZ2FIgY3slk9IDxL0oRhDJj5KZ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweondbkwTg4VmenqtxHVNC9nT3Z_9IiaJiOJM_kC7edUOANx_1e1qc0LNh_qgjyyNtQ2wCDoVuYUXF2kFpzXt-c64bZ7fL68Gf_Xg4LNXZVas6nQL7WCNo1qnAHDV7KhlizCbyq9Ng",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcTHZhpIdreKQRmKF1A43qscCqnzqZihdrBdfglTTrVMa3jYLzxNapBGnMbdOq3FMWg-nXsaBoq77BTajdGPcX14VjLVJh65LxpGk1NLQdHbWN3Hj_SWB4gFg9xGlih6_HNwwv",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo0P_YPANo7yWEzoqITyW1xyOjmwRdRn6FLykn-pXxc2d8p6TrKqmZ2eZTicu986oVjwjs4QlF-O-IPvcDtAX-79R_L9JXjGNo89ddaCPuaGCnkKAS_cDpNY27o8NCiOUErET7OMoJwJZlX"
        ],
        "Place Id": "0x2e7a571a23afaec3:0x6597b7e90921b0ec",
        "Top 5 Reviews": [
            {
                "name": "Pak Toni",
                "review": "\u200bMencicipi Syukur di Omah Dhuwur  \u200bAda kalanya hidup bukan tentang kenyang atau lapar, tapi tentang sejauh mana \u2026"
            },
            {
                "name": "Pak Toni",
                "review": "\u200bMencicipi Syukur di Omah Dhuwur  \u200bAda kalanya hidup bukan tentang kenyang atau lapar, tapi tentang sejauh mana \u2026"
            },
            {
                "name": "Janef Aulia",
                "review": "Jujur, tempatnya nyaman dan makanannya jg enak. harga sih termasuk standar (porsinya banyak). Tapi sangat disayangkan pelayanannya bikin ga nyaman, saya ceritakan kronologinya : \u2026"
            },
            {
                "name": "Janef Aulia",
                "review": "Jujur, tempatnya nyaman dan makanannya jg enak. harga sih termasuk standar (porsinya banyak). Tapi sangat disayangkan pelayanannya bikin ga nyaman, saya ceritakan kronologinya : \u2026"
            },
            {
                "name": "Adisss",
                "review": "menurut aku makan disini bayar tempat ajasih, tempatnya bagus, bersih, cocok buat acara arisan, nikahan, foto2, foto2 wisuda, tapi kalau dtg cmn buat untuk dinner atau lunch aja kayaknya kureng, karena rasa makanannya sangat tidak sesuai \u2026"
            }
        ],
        "description": "Omah Dhuwur features a beautiful, aesthetic venue with large portions, making it a popular choice for events, photoshoots, and gatherings. However, customer experiences are mixed, with some praising the comfortable ambiance and food, while others feel the service and culinary quality do not match the appeal of the location."
    },
    {
        "Name": "Rumah Makan Lestari Yogyakarta",
        "Fulladdress": "Jl. Ampta No.88, Tempel, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        "Street": "Jl. Ampta No.88",
        "Categories": "Restoran Jawa",
        "Phone": "0857-6464-3289",
        "Review Count": null,
        "Average Rating": "4,2",
        "Google Maps URL": "https://www.google.com/maps/place/Rumah+Makan+Lestari+Yogyakarta/data=!4m7!3m6!1s0x2e7a59e83ff20e07:0xbca8b6ba6a6f3919!8m2!3d-7.7818493!4d110.4046824!16s%2Fg%2F1pzrvj77q!19sChIJBw7yP-hZei4RGTlvarq2qLw?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7818493,
        "Longitude": 110.4046824,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerqKDeoRGO6Gy8MytxBK9D4ZgOba60rJurQfDVtw7Zvz0RToxtlfFG6Jgf2N6rZXSCLLKr2o3wL48uYfBU5YaTps51s_ZbHstVOvEmTwb5u_KBJpDI4sByhBTPvUuvXGRfds40BvA",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBIBY0AWkL1yaDaCtnu3CgfQegPOSekUCa54Pyw9__SI5ZPAeDheVgQ-w9WUSU8al_mtPsfZQUHYxTWvW2CH65lfqEhMJTrdkDyyfuaZuc--EMIXqCXjvQHL8E3Qw2aLoYwHZx0lo3KTxn",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweplcv0_CktNtjNpRskqD7HNL5gf9D3UCdxOENRPUNd3PTDN-aq00wgvUOFFMhRKkhpPxgJvMT_hbm3UtdKEAPte1Ta1thdMd0YGA1HhYI7r61mGe3PSi2oqWIwuNavQHf5jHxri",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep3EwBXqK9v7vtCauFBNX8xE3JUuqwncceydbY-knfmm3WDCD3wAfY5ENSaJjqEa1qUYHjl1l-VNpQ1AfA1mNNzZQxfsOc3ylmYXvV6DoBOIaQjdYEFR-o3HCnGmPjk9T7Z37Q",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepON4j2PRB1TSWActGEhXDiGojZilB6Gikdv6o46Ki1IVFoZNV0oT0A1yhs0iJx6Gzc8no7VUicQbtwK3PzlbpvHDD1tU_sY5GCzxD19pn7SCEzkWuqZjutAff4dr8qNuqzY3w",
            "https://lh3.googleusercontent.com/a-/ALV-UjVmjxhF8U19CLFo1ZUOmNbWivAAn4NmZkDm5Nx6_-bb4sgxy3I",
            "https://lh3.googleusercontent.com/a-/ALV-UjWNDjsjg210fDd24TF7RkJdHWCzyXqjsz2w7ObAljIwlTf_J9z8OQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwermfbPSdx7e4xWOHe4LWru0VRLID9RiATQmu_MEoErKYuaG7jElM_Rflv-x1HyS9YMBwk6WTNL9O4LtAlo4MSjoi2oky4BCljKZIGOTvXVwgy2Ugs3ftLmiODZsHKDosWmtR3dqkg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerlUgQJzgmMX9pe8BtEkhUpmbpKIkmsromGS4j7gBC4awPOSAo505NYL4ea3zpIjPn5-m5VPQgfQ84TFtjbN0EeSuVm0B5u2XDX7nS6P28SrXSpqWF3RdBii7qVEG0HKCzkds5aWQ",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9puFGsk2gsMvbuMP7Xz0q60VT7k4INkgNVbNx8-mm9xL_UKURSFAqkuYYnYYT_EOnc14S_i7usB2xmsp_dxR2NgXx_mL3EUsxsf3xWVyfYyoXzrSK4U_Vly7K4KePuRa3FvSPnM_Q_jBAeD_",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqpjDqkLVlsFvMmsUzbcvq49zjZm_Fe116XP2oqJgl0czh87iKErMB986ciT58qcNZZHWeCDE-LNKvoqiwNWZnhwoACvmEqfH3i3WKI1Ewkfwb7jqgmZhfIigt9tIu7RRvTOkkqHA",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psj4RsoLZVi9bKCSR-cIb6O1dnwOcRTF_U0rrtG4NfTIbMkC4HCh5HIZkBx76mn8jugPTDGCK5jhg_sIkYV4uu-C9VPDreSNQQD4zFjaJt4duhzEDyyN9feyeFpYqTWSRYU2wJ0kJ-nDhQh",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweom_zXJA9V30Z0aLhHARFYpZpg6lQaQ67MeFaO3yKQzUWnUojnno0y0eHPphHf04p5Zs8NfunDmioMs-gssQUlL01M1t5fWYvKnh3lMM3beUdqtmq8t7dos5NBH6XD2pKsuf8tI",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepz8hEtaz1lx13YnNsuORxnhvZ6j5tuefoPX8k4TWs4Ev93lqpCuHXnX3HOKYDLeORRk1S9lG8Jq-Eb-eKp8nrtZc_ciF8H44jjpUYzvGaR2xspjTzNvegKh1wgPnjjsnTB8hUS",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ps1R5UGe78awH9c83HlLbt7RrM4k96uy7K_XKp6Y-VgWwgta9MM1N0iC6dK_xT-ingZj0OzjanMCr0rtvBHXJwWntXyPovfqwdfoXJ_mb94nC39QQp8_MrL6K5YwSxNRHGsMul9",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepp5XdPZpJO_QQlCmrRh-VdeEp_m0mNK8TagueEi-iPp_OwhyIqsKr0MlCGbUd6LjeIbuPI9528-bWKjZUANIYCHnncSTgzT2QA0BBd0sJiPze8D5I6JilrDzZV9Eo51Cd7hsDd"
        ],
        "Place Id": "0x2e7a59e83ff20e07:0xbca8b6ba6a6f3919",
        "Top 5 Reviews": [
            {
                "name": "Zul Akmalfirza",
                "review": "Paling suka masakan spesial di Rumah Makan Lestari adalah beras merah. Untuk lauk pauk banyak pilihan. Dari mulai ikan bakar, ikan goreng, ayam goreng, tempe, tahu, telur, telur gulung, dll. Sayuran juga lengkap dan sambalnya beranekaragam, \u2026"
            },
            {
                "name": "Zul Akmalfirza",
                "review": "Paling suka masakan spesial di Rumah Makan Lestari adalah beras merah. Untuk lauk pauk banyak pilihan. Dari mulai ikan bakar, ikan goreng, ayam goreng, tempe, tahu, telur, telur gulung, dll. Sayuran juga lengkap dan sambalnya beranekaragam, \u2026"
            },
            {
                "name": "Sirajudin Hasbi",
                "review": "Sebagai rumah makan ampiran untuk wisata, RM Lestari bisa jadi pilihan. Hal ini utamanya karena value of money nya relatif bagus. 25 ribu sudah komplit, ada nila bakar, mendoan, sop, bakmi goreng, nasi, sambal, buah semangka, es teh, dan \u2026"
            },
            {
                "name": "Sirajudin Hasbi",
                "review": "Sebagai rumah makan ampiran untuk wisata, RM Lestari bisa jadi pilihan. Hal ini utamanya karena value of money nya relatif bagus. 25 ribu sudah komplit, ada nila bakar, mendoan, sop, bakmi goreng, nasi, sambal, buah semangka, es teh, dan \u2026"
            },
            {
                "name": "muh baharuddin",
                "review": "Rumah makan lestari cabang dari rumah makan lestari kebumen ialah salah satu rumah makan (restoran) yang menyediakan masakan prasmanan bisa untuk kantor, rombongan  wisata bahkan mahasiswa dengan harga yang murah. Menunya lumayan banyak dan \u2026"
            }
        ],
        "description": "A budget-friendly, buffet-style restaurant highly favored by students, office workers, and tourists for its excellent value for money. It offers a wide variety of complete meals, with the red rice, grilled fish, and diverse sambal selections being particular crowd favorites."
    },
    {
        "Name": "The Westlake Resto",
        "Fulladdress": "783Q+294, Bedog, Jl. Ringroad Barat, Baturan, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291",
        "Street": "783Q+294",
        "Categories": "Restoran",
        "Phone": "0811-255-511",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/The+Westlake+Resto/data=!4m7!3m6!1s0x2e7a5884c11dc483:0x46a2b119fcb720b5!8m2!3d-7.747528!4d110.3383619!16s%2Fg%2F1ptzfd646!19sChIJg8QdwYRYei4RtSC3_BmxokY?authuser=0&hl=id&rclk=1",
        "Latitude": -7.747528,
        "Longitude": 110.3383619,
        "Website": "http://the-westlake.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerl0hlqJ7E-hDUMOdpHCGUSTQQY_7gP_lPQ4HNrMmp3NVopd_h5VVNWMDdpOVwoBhemRwx0znq9QBbQ5Zeqoe488DeDVVUlCcqYszTPT8Kcw8D0hDJNF-5gCfz09rARLo4w7pORkXEi6Aw",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepHtTi8qCUHeE0SSf4F9JI1fxNtSVGNSnARYNHcCM_293lImxW9T3NgLovsCsePTqC3Fx6a0llcCYcRiuD3yBt1XoAa6U0h8KoQ5HJ0m7mM3HATQ1DWB5BAbBroBuL4Gtso5Ej2iddA7WJS",
            "https://lh3.googleusercontent.com/a-/ALV-UjWwXh6d4QsmM7i-1PhIAsmEc1bYUZqhfI9IXT_w7TUnNMwXcWLF",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBa3XvHfPjSxeY421_-xfNaTTugdqIZ34NX3SCNrfY7v1uMIazm5RG4im8zY_3_7A8ICiBaRXg-aue93PfJa3rjwyZaHfbSylbDQd2qMzfkcUSm085FarnXlz0ZRAg_q8cP8CmJQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqBJaQtUy6E7Mp4FHpPq2IPs0-IkEEwwZCYdRQN6hZ6D_vOK_I1XAnlx-HQCJoy-VIkHClHdYGNXpIvWZbsRFl2mPTSyeKWAdGZiZB2EwU3g5WiBD3iAYplOd2RUKHO5d65s9E",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqAUG0Q-LZVr6nMPccDL7ETGKTbP2Ns96KOEzunOljuxNUW6oZZWbNHKn3YZuoGccXcVj9-pKZozPEb4EJ4vlVYZEupng76qFJ3dD7aB4IvWQYRxgE7S_9v7JzdNgXDFOf1LThu",
            "https://lh3.googleusercontent.com/a-/ALV-UjXHsRcDg7vqWG0Tu6vOdHwNOYgKrLTaFbO95lpuYsFQdqQYNYT6Yg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweokMsz59HCGl4SDDk0buG_zX4f6J4cYsyR9tclx5G6YBPGPMhnCExT0Tl_sKfMDlJI00s2Hav5Lkaq7SqywSan94QAYaFk-XcDur0kcxIieyFm0pIpRaBLyGO73NkP1352UtUPTPeXC1sCR",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo4V3uGNBZGpxailp01zWshNUw-FJTH4yUXOrfjHpkUhjD0fzaHr_5hlcHJdlSfkLLEHpwOTHQ6bgZqQgepgw0eScPsTTR78cf02291_m4E9d7oArqb-8YjXwI7RODffAthj8Y",
            "https://lh3.googleusercontent.com/geougc/AF1QipOztq1pL1WuOagbAKtDZO6Gz7OUvlZnmTH6vM0f",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepfjR2hLeGKkm4eYxccAEuoKF7V9n7K2X5-epTHiinkNqQ1nJkdEmQtMgNkCORsd4Ckq66S6umCXfa6mWyl08-4T38Amz4zneAjrTP7XHTHCcvupCkFks9EqxQRv5gIk3F6CXTi3rmj7BB6",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptSvAp_LBA_aMlTaLpdy99zQRX-3FI0RH6X6_HnxDGLELTCVTzjggEyL6izBquztO7UMz-xb6Cdx3WH8HGCEbGVubFVdy_S5YAs5bTJxw99L0NRS_OxRHw6LBCKEV6_KhLtkdnXD36gCjvp",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerOiLtMyZcOc1hlbzKOwMK0lAAs9CS9l5-06uTUHo4UWbYOVylpt0sUHYyeO-jWS34bgxIPWvbgkrZz7ntsbRNFLBZSfZCBDnfti170uzYZ2JvjmV9JSR4pjEsgRo1K_OzybxBrow",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ps38Su9XkdL4B9A6J4VZ86EgJ7pYPawxQg0-PcxCcfA9a72cepa-h0GaQscBl7QXQ4k3qqoQweGfPNdSk1EXTCFwXQwDdcB7rThqL50G01TR2rA_LJyQhMX9UHQ3COvT8FxpVTrpKJT5WTB",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweofihRUEIkyGGs3cYS5JHjshp3uW00iSurdl8mZF8mZpAlJcB47stTJNRLLjVpEM6s34zGa2bb1_xZFS3TZd4iRyqvbYFYvKrqUIwn_XVInEF9Ox6gqJCr-0cKdPbcvQLLQ8dSw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerLBTX3ZYd3aIqXVPRWlMWW4zXCHuAX4e1F-0ZJ9wDQ-A28tOKQ8tbLNOUi2H0wm_8F3oHDldn3MO6lxc4KQrWO_Kx4Q-88hQswNc75VV32S5hVOhGDPZP5vaxzdobjAY0y4nl3"
        ],
        "Place Id": "0x2e7a5884c11dc483:0x46a2b119fcb720b5",
        "Top 5 Reviews": [
            {
                "name": "Davi Apriko",
                "review": "Menurut saya, The Westlake Resto adalah salah satu restoran yang unggul dari sisi suasana dan pengalaman makan. Begitu datang, ambience-nya langsung terasa berbeda. Area restorannya luas, terbuka, dan dikelilingi danau serta taman hijau, \u2026"
            },
            {
                "name": "Davi Apriko",
                "review": "Menurut saya, The Westlake Resto adalah salah satu restoran yang unggul dari sisi suasana dan pengalaman makan. Begitu datang, ambience-nya langsung terasa berbeda. Area restorannya luas, terbuka, dan dikelilingi danau serta taman hijau, \u2026"
            },
            {
                "name": "Hanum NurTriEf",
                "review": "Recomend tempat untuk memancing yang sangat nyaman dan santai bareng keluarga. Datang hr minggu sekitar jam 9 parkiran masih sangat longgar. Lebih baik reservasi dulu jika datang rombongan apalagi hari minggu. \u2026"
            },
            {
                "name": "Hanum NurTriEf",
                "review": "Recomend tempat untuk memancing yang sangat nyaman dan santai bareng keluarga. Datang hr minggu sekitar jam 9 parkiran masih sangat longgar. Lebih baik reservasi dulu jika datang rombongan apalagi hari minggu. \u2026"
            },
            {
                "name": "Nindy Pramesty",
                "review": "Resto langganan fav keluarga n temen2 bisa buat berbagai acara, menunya enak tempatnya nyaman banget \u2728"
            }
        ],
        "description": "The Westlake Resto provides a fantastic family-friendly dining and recreational experience, complete with fishing activities and a beautiful open-air setting surrounded by a lake and gardens. With a delicious menu and spacious venue, it is highly recommended for family gatherings, though weekend reservations are advised."
    },
    {
        "Name": "Rumah Makan Mbah Buyut",
        "Fulladdress": "Jl. Suryodiningratan No.3, Suryodiningratan, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55141",
        "Street": "Jl. Suryodiningratan No.3",
        "Categories": "Restoran",
        "Phone": "(0274) 2871062",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Rumah+Makan+Mbah+Buyut/data=!4m7!3m6!1s0x2e7a57be163145cb:0x13b3354136bd6e9f!8m2!3d-7.8181976!4d110.3617892!16s%2Fg%2F11bwpr2j9y!19sChIJy0UxFr5Xei4Rn269NkE1sxM?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8181976,
        "Longitude": 110.3617892,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq4gSsQPoQh8jrRpjx_rM9cSlB-rWPyvHolNZvnJjs_HRO883twaRagUCC5rBFFxRcWxg-KVCfroYRGkF8-OTbOSM57XsDS4S3UL5W7sfAnjgKMK9ipTWOq1sOePLlKTSSffMkQDg",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoJbgyJYlTDlTSSiaY1YZtiK7zdsYgbapn_bNNUavXYgtVM1MkNUIGNP-Xcf9v7oXWzdQCG4uCdd7px8oaWXOYFro5tbhTngmJ6eiz0iFZz9vOBiwgC_sKm0w4c4HqKOuP8b2DD1w",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerGyv1YpDNb2LSr1aE52RuB1ar5ANyAxtpb20jhCn7u8RLutWfNJhOchV8L7EeVBtOzZdJbzAqhkV8ePi7OeynfhMoPNFvolunATctO8Ot5teJLdTiCIhxuUNRI4nnW45rnJz3LUA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqeN0XWqT6G62-ZNIlaNAUhAThsKwmBxEAKWdQAGixHaY4R7zhunaR8Xjw1eOQO_Ewf1wUM1oiJiIK0oXEtV61FOQuIKJ4OPI97jF0-_W-vm-6d7vLG4ZGG1X6ZhcCxTdy4Nayupg",
            "https://lh3.googleusercontent.com/a-/ALV-UjWib-0oTmDlOMkkFnl_fS8xxVZR3Vufx8KloAZHea_38cl2CIkI",
            "https://lh3.googleusercontent.com/a-/ALV-UjUbeaZNFiR02_KsNoF0n4Ep_hOu9CuRBs-xZrk5sIRh1qzfuLd9",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwereBPvR7tXhS6ASRnv2ZnPktgJB4xnpXoOkYObsHd2GBoHbDNw3WvE1TuKYKLjN_mE4jJYx_hlpDzTUAsXRmScKWUA7UZ28FUc7Bp73tz0wbpcs4qxH-iBRtMEgKrZJOHu6rHQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepntFcOcRrGVUm8ggAvfmQC933JGeABFy8kbPyfgmBtZ5zNA2j1QvUWbcuieF9YpNVEnY7fakSRdgCx7ZFslSHAYhviRWDd4e83fnXebkoJPFcQ70rwfUAGLCO80CfX7AaT7bvp",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweruaKgE3eNrnrIS2f3QZXhTrBpH8eNZEnXWPAlbyxI900-XQR2LR-_HRsqsJBUsVmVYtH1TkgvSWt2athwWxds9SqWMAEQHcba2gJ03qXO02D60Fyc2GeCrhPA2wk_ESfFyAFUS",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer65xeqNaqCp7TGObJ32Nm4TLqCoD4__1m-ca2jr7FUQ_4vYeL2RWsRsy_4O3YgrMnBHQnXupaML4M81VUbjRfXyyZ-f_jz1ZbpriEokBpzdsnjCBchaZxXlASKJ53xDi4V1Mf7",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoCmBSuioTZH64kR3DXyh4YSPH44HLsC3A779DMmnqMz5srtcGbjhr8RTjoIxnPuUzQR27FJPRCXJrhAOcPl5KLbodlfgGe9AwNW-eHwyNtGA4JHDtyIFA-Zg1bKsi0SCJ05MXK",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psq0j8uS_EaywCjd33OT8DorFmf3tqHD1xmdFXR7_O_wCZroPbur-9R-v2cg79cZbbA7pOxCeEoVOM2zazdckyBwUMSbd91o29jsprqFOQ6X91eMEqRw_a-I9yYYv2X461qiUduKvV1lG-r",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep8DgViUqWXgONeG8Ao4UMyAveib75BuRGnO8JVhbXOrRVOPalLJzld2pV8yXwHV-fxiAWGtBCePSD4oGT3P_TQr9ChdSQcPtJQ2_APjsfWiD6EM2sXiTTAQWSzSTQeMUyeB_IM",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwereh3cBx5LE0yW2bD9j1_TpJaOYrryemMsfGa5JslaQ7flo_NH1E7YrgMrtIq7-TA0d4w2YphjIHKD_-8NJVK7R3ZPFTLyyqsOKERPPpcE01cJa0UD9VTLdN4-BBhk9hiSojyhP",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepNFCrmSgILEd_LMnp7InS0zZ3c8e6vo40mzcmiRCPyR2xd05_OLLvpZPpVdELoD1paPrT1QXnismlzaPDjiaWX14mWWK1CTtauJY91U1KF9YHx7KpdmGpTxmZ-r0lFBF5dvMuub7gaWs5t",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepdqY5QwoYjxB85ZGVt8Dhjn_0S7bEiMmaqNoI-Y9XJ7NKBCpUUTtgKhP1_iQUUROZIRn8FbCVx-m4GmjbVkdu0fk3ytE1MJHp6zYMvYlotEgZJl1KCxODq9zgXxigt0BMZV9BL"
        ],
        "Place Id": "0x2e7a57be163145cb:0x13b3354136bd6e9f",
        "Top 5 Reviews": [
            {
                "name": "Roseline Hehanussa",
                "review": "Tempat makan yang suasananya mirip kayak rumah Mbah : simple, tenang dan nyaman. \u2026"
            },
            {
                "name": "Roseline Hehanussa",
                "review": "Tempat makan yang suasananya mirip kayak rumah Mbah : simple, tenang dan nyaman. \u2026"
            },
            {
                "name": "Yulinda Istanti",
                "review": "Pertama kali makan disini untuk sarapan pagi, Kebetulan hotel kami menginap dekat dengan \"Rumah Makan Mbah Buyut\". Ini sih konsep warteg,sistem prasmanan (Self Service) tapi berkelas. \u2026"
            },
            {
                "name": "Yulinda Istanti",
                "review": "Pertama kali makan disini untuk sarapan pagi, Kebetulan hotel kami menginap dekat dengan \"Rumah Makan Mbah Buyut\". Ini sih konsep warteg,sistem prasmanan (Self Service) tapi berkelas. \u2026"
            },
            {
                "name": "Laurentia Hesty",
                "review": "Hati-hati, saya sudah 2x disini dan mereka memasukan yang tidak kita pesan. Pertama kali ayam dihitung 2x, lalu yang kedua dimasukan telur padahL tidak beli telur. \u2026"
            }
        ],
        "description": "Offering a nostalgic, quiet, and comfortable ambiance akin to \"grandma's house,\" this restaurant elevates the traditional \"warteg\" buffet into a classy self-service experience. While the food and atmosphere are well-loved, guests recommend double-checking the bill as there have been occasional inaccuracies."
    },
    {
        "Name": "Rumah Makan Sabar Menanti",
        "Fulladdress": "Jl. Raya Solo - Yogyakarta No.KM. 11, Mangunan, Kalitirto, Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571",
        "Street": "Jl. Raya Solo - Yogyakarta No.KM. 11",
        "Categories": "Restoran Prasmanan",
        "Phone": "(0274) 497052",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Rumah+Makan+Sabar+Menanti/data=!4m7!3m6!1s0x2e7a5a6d9dee29d7:0x38589fc24e0dbcab!8m2!3d-7.7805314!4d110.452931!16s%2Fg%2F1pzrnvbhn!19sChIJ1ynunW1aei4Rq7wNTsKfWDg?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7805314,
        "Longitude": 110.452931,
        "Website": "https://rumahmakansabarmenanti.shop/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer_RvZxEZNuZO_GdnW1Z6gomvVyw5bzsURKKAclok_FkbSYHwnbOmXjGX0NvsowiBhKcB86p6xnmBXQkM9_PhLWcBfpqWTJBIcvdZqSJ0GTTCyFlInnlQVyZeAKEV0MR6Uut3nMOg",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoUYY-LGhAB3uGwfVG7VHNAwXV324LOMF1Jcaj1eZJP5fflGGyEDp8tiLVJiFFJaK6mugl1tI1XbzMZdxJnr3L9NccFO0BZf_gjKB2I9jli_7MW6wn2bD7im2PpqsxCjXD6iic",
            "https://lh3.googleusercontent.com/a-/ALV-UjXIDYI5YCdvT77LzlJ497RvEw-rwhabS8qRBHOWu9OsHDhH8oU",
            "https://lh3.googleusercontent.com/a-/ALV-UjXmcsqMrid2FWG1v-W1CitpudssCV36bz7LBJVy0JHd2k1buLYM",
            "https://lh3.googleusercontent.com/a-/ALV-UjVCnez8nOjZtT4qDTsxORnHbcWFW3tmrpxW7fVvVgJSOefMOK4",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer_3C1FstwtruHkSbr8mnyMM3ro4OWSHyeDhfQp4xMe_wKa5dvf5Cm7DoBQtbWyFKYHqkfrwU0KtUMBghxDoo5PTWd1QPx0tPZ5yj6XT2trCBhVJQ2hHb--DoVuI8MsfJ1Aj0lF",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerj3MmasCjN3kmn48Dabo7XbG6VuW6Z2oo5p_D0Eb8wOYq4xK6rmGwTNJLuAdO1p78k2-gRlC2OHhXXypi2_sV3MzMZp1Clhtc0WmYQD48XJmUN1gcrSksLTs0b2NiJptmnBOydiKYvgDVl",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwermVMdMAtD8enpEy6_VXweSsTMsD6fylMZ3uNdw2-11qB_cp17HOEM_CjgvBwYVZoJhil3FKR9sW0ieMUlFNirlrN9XXftu2vZtcYwt5mbOUtC4uoDHzX8hcOd6oscy5VoTnbiO4Q",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonPKN0zbdWua3CNQGdlWgZ6zAozkZwrOUPXYvl3hStNjKSiqb9IgLEw2e38wd_q2k5VKwQX498-6RxVC-Pfk8jBmwr0EI74alqjbpwKyV8_iOZ93hgYijYNEZ33pMRbYwtYKNzYgeUp5At",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqlt7UReR8OAZAeuDbo3FWL83Xy7r-Ae8pIdZQ2jPsQmO53cBGpGiFwU4fo3y_vnciWKXpEtPbtyFI3kHUyROpduT6Kg2MWjnH0i1Huywg2Bfg2_KhSehygDEhGmBdAq_O7LJpxzw",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvxwk0PScqzrT5zmLxw6R-gAfjB6K2Zyrby4ZeDLCyTkOAlpIxhpQhAwCsxVF-_AYpgg29NDh5KfemINyHj4RycyVHSfYrXkEI_KCGjmTNoHNCsm4IagOWWmyV5iJbx9LV_btfryw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoEAg_Ddqltin4bWzV8Fexix0e-mjrq9vEYAp9gnt-m_6teA0UwIbVe0X6K183v2SDNJc8BLG2eJ_Z_pgjz1k3qw3q9BunGoVBqCS0bpcJzLxIDKeDs2RHRW1aDSkaIffbul2q5QQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqqExBnGL57u4FHIecLFO1ny9YTamomkSqFheV1e7K6weA10wbaJ4g8zRCyUAKeRLUkutv5Kcd6ZSODnf7ioVzGxHeLsefeXhuBXISgaitRCZUqk9GB3_qh9epkztw7DCUTeexH",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoSNkD_wDkb_-XY7RiJNNPlsIdeDD4MegYgrCiF-CL3K5e1fZ1R2ZIJePzDHQDF1bMrEJvHEus08q3CwUe7kIo2tJGOPfGsNsVDzOArMprfuv2N1vdNmOIrPc0HiDuqpOrbT6do",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvFvbsCc-CnYM6FF-UdcZYZUIid3ZiCe19drtvJKfVANLtIS2JGnwbB6yG-0x-kzk50NiGO5leyXXWIW8dcrUWI0mhhPbfB2Tv9CwxUFB2i_wy_RqGLxZaIxK4XderZ-4e5wniHlKohaIca",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo2RPYqoSAYFkrgLTGkZGiTogaLES3lyMrOjtN4TC4bb_RnWr_-HaBZdVUaNXDrYpNLZWM-RGcgt9YmEavbqKSOMQbSnchoyjDMvKRDg8GqIW4yk4Z_yeDnYSJfGSf8K6t-eVbH"
        ],
        "Place Id": "0x2e7a5a6d9dee29d7:0x38589fc24e0dbcab",
        "Top 5 Reviews": [
            {
                "name": "arief rachmat Fauzi",
                "review": "Salah satu rumah makan legend di jalur Solo\u2013Jogja yang nggak pernah sepi pelanggan. \u2026"
            },
            {
                "name": "arief rachmat Fauzi",
                "review": "Salah satu rumah makan legend di jalur Solo\u2013Jogja yang nggak pernah sepi pelanggan. \u2026"
            },
            {
                "name": "B safuntina",
                "review": "Lokasi berada di pinggir jalan utama sehingga mudah di temukan Tempat makan prasmanan Menyediakan nasi putih serta nasi merah \u2026"
            },
            {
                "name": "B safuntina",
                "review": "Lokasi berada di pinggir jalan utama sehingga mudah di temukan Tempat makan prasmanan Menyediakan nasi putih serta nasi merah \u2026"
            },
            {
                "name": "dewi handadari",
                "review": "Ternyata emang benar se uenak itu sambel trasi lalapnya di RM Sabar Menanti.. dan akhirnya bisa menemukan kembali penyetan pecel ayam kampung dimalam hari yang lama di cari2, (pernah mampir sebelum covid tapi di kaki lima) \u2026"
            }
        ],
        "description": "A legendary and always-bustling buffet restaurant strategically located on the main Solo-Jogja route. It is highly celebrated for its comforting food\u2014especially the sambal trasi and ayam kampung\u2014making it a perfect, easy-to-find pitstop for travelers."
    },
    {
        "Name": "Jejamuran",
        "Fulladdress": "79V6+R73, Jl. Pandowoharjo, Niron, Pandowoharjo, Kec. Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55512",
        "Street": "79V6+R73",
        "Categories": "Restoran Indonesia",
        "Phone": "(0274) 868170",
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Jejamuran/data=!4m7!3m6!1s0x2e7a5f4b00000001:0xb991824588eb34e1!8m2!3d-7.7053786!4d110.3611577!16s%2Fg%2F1pzq550f5!19sChIJAQAAAEtfei4R4TTriEWCkbk?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7053786,
        "Longitude": 110.3611577,
        "Website": "http://www.jejamuran.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweohwxf2JC3B4Dfxxk8mpnEe8-H2j0GGeHX571cNrfN08NI0xZJAn3LQ79gKicYJCVbQT6CTP5y4D6_MpCe1dAw2S24m9ecpl4qDiSI-9nIh-WkjVccIkY1C3dR4kv2O2j2_AZSQbQ",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwercSVf2eI1vfWcQRxy5hWstD1PUSFi7FoLkvW3v6h8Svbn1KAzfNT3cVhaDIpxOBcfxESpIrsLIgWY781GBAzMtnNT9gx-8O6FP_PfpeUX0YYA5vF00RrWyMwCDQ0ePslNc6AV8r__xdamz",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo2WOaamZhttxbPQbjXNh7yXDbVkrqXPzU66-oljerkiO9jEX5Gxxpkx3Eg8ae_J9MknNxm9PR2W18hlieXyu7KXKxY2k0TURr6xms1uaii5LSalZcWBNCgpaAfzYgt9EUfLhsg6QiYDEdk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqv3AJpHEzCplRM8WwKqyznU3_Lg4WMDtITxLHO07mIKJsx3VHj3DeHRr0dcY_tVas5Oc30gnR-FGMNKefXHV5gbiIZBt7sS_vPPNtLRKXx58nHKiUNeDBEI0JhVaTwGAqNWI-zYg1S8jtK",
            "https://lh3.googleusercontent.com/geougc/AF1QipPgiGo7fCwq86yZzkNEnxHey4Ys5H1KcKz7iFqR",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqtbHtiO5MRgcIPtI4f16wbImMKcRZSUoUseVGYkXOzOLthWevj1IHcnH5ALnpgetQzwPifAwEamd0MvvVXO6dW1YxO5MnpVk9JCukclAw_8FQ1hZ7-7VbkxgdcHl69vOnmaQWOsQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerAee6fxTkg1G5bnz6YI1WyfFWF5R2jnI8n0dGKoxVsQSpquahTPQe2fQFV3VM0xY6s7DyPC7NUWnjBAqOmsgvv1bG1g_MqA9Jb0Ir5ywtwMXD-20VTY_9eYlHlDVur0uDRyUtm0FKKXY0",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwergZKhg0syZMH99PQiDXQsTUulnIAEFz3LE9YLIT3xxj3zGO__4lE8uXDVQb6cc-faQX5fRKX6D4SkE4SnxMRUP58cLsqilCvrt-OgWnPtf0TF0xcQ2oCfnG1fpTcyWXRzius8oTg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepp1ykKekeiZNOkchJET-JB1UIycD19sq_AirlqjdENhKcxK1kN6x7ZNRbWr2LGMxn2E9ycav6w-rXNhX3gdjE4397O3YEAv8V28fV6K--sNukbDN4r7VdMSLh0bQPM3EsWWj_AcYMb8XeS",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweodaf2xchSUZWjN7p53K0aGPhlGXTqA4xdoqmeCXGBQ7C5IHK9KSE4KNdyXdu05HW7JTzaZnIyX5yBoa7WutkBvcZMWUEOf4Qdw2bjjdMa5HdhIhtIdfemBq1bBq-_4Qnp5vceMCw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonO-H-pwqcDZOcYolByyI5LtLRFm0MShPBKxdMYPDP8z0YxI1leuzcVWZeVYyWlI8M-aEezF_hXtaNYsRDNacV7qnvzZb54KXGmow5kHc7j0UWbcqNZRq3_2Tcy2dX3dEchvUPJQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrgIhm3uGNF3pseydwM0aFKU5PfUzh0PwfiPLWAwuF7E0vwE2NrlaXdydY8ThVqa38o0plH9fUY7Xvm9NklAMvimEamZUNmkxGZRlANPj8qV7i-ptsT1zlpxLaBVFZmTgJPsxyTXszJIWn",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptWlsxd21zadhgDkBkV7u-F1hHzJgIIm_D3EsmMCY-YHAp8s_efEE6r0w9c9KlICYDt84mHWmpQNg7gctY_12as6KXT8P2rHQTg27o0Od_J--A_JYZ9PWpOqvOOvqNtgDhmtCVOuMvY3zsT",
            "https://lh3.googleusercontent.com/a-/ALV-UjVZBG4x1Odw5ACGUdMXHiU6eoAhaaAzLmJdU4RPFpAoVP2U2XeJ",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvWe-CN5vn4MdA0WM8EwPq-MaaRSGymxoic7mQilqKqiyXEhJSMsTxL8o2zhrKPQLw0FnBos0WTJ0V2ufprgm-HpTkgZbXJCh1GmrTYO0FaCfhUb2zwwDvynEwjrieI_Rx4IM2FFCLjq_I",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvQ-QqBVwRYCl4BoicbvhtlL-6eshmmz1hocXLJslTYNAeZr5lgCj0NLvSthPi0Ekb1SY7-WQx254dF5Z_QyYB2pChk0hN1AeFhsE3SDN8xR3j8nXXnkXe7640m6MV0e5THg4I65V0oKEA"
        ],
        "Place Id": "0x2e7a5f4b00000001:0xb991824588eb34e1",
        "Top 5 Reviews": [
            {
                "name": "Yulianto Satmoko",
                "review": "Warga lokal tapi malah baru pertama kesini, padahal sering lewat sini. Parkir sangat luas di seberang jalan. Restauran sangat luas ada beberapa ruangan juga dengan nama- nama tertentu. \u2026"
            },
            {
                "name": "Yulianto Satmoko",
                "review": "Warga lokal tapi malah baru pertama kesini, padahal sering lewat sini. Parkir sangat luas di seberang jalan. Restauran sangat luas ada beberapa ruangan juga dengan nama- nama tertentu. \u2026"
            },
            {
                "name": "Nurul Rahmawati",
                "review": "JEJAMURAN  Demi apaaaa, bersyukur bangetttt saya diajakin sepupu buat kulineran di mariiii \u2026"
            },
            {
                "name": "Nurul Rahmawati",
                "review": "JEJAMURAN  Demi apaaaa, bersyukur bangetttt saya diajakin sepupu buat kulineran di mariiii \u2026"
            },
            {
                "name": "yosie may",
                "review": "Olahan jamur tyt enak juga Mulai botok dll Harga juga terjangkau \u2026"
            }
        ],
        "description": "A unique and highly recommended culinary destination specializing in a wide array of delicious, affordable mushroom-based dishes. The restaurant boasts a very spacious layout with ample parking and uniquely themed dining rooms, making it ideal for large groups."
    },
    {
        "Name": "Rumah Makan Baru",
        "Fulladdress": "Jl. Kusbini, Demangan, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55222",
        "Street": "Jl. Kusbini",
        "Categories": "Restoran China",
        "Phone": "0813-2506-0677",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Rumah+Makan+Baru/data=!4m7!3m6!1s0x2e7a59d2ca3f2f41:0xe218c6b966badf2b!8m2!3d-7.7873947!4d110.3791322!16s%2Fg%2F1hm2vndjd!19sChIJQS8_ytJZei4RK9-6ZrnGGOI?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7873947,
        "Longitude": 110.3791322,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo89Edo2djOqg-DpIXGdILS1kBDySFci6GCrucHi6z1-ntpIedbEs12dO0Rmq_S8z63GKY-reK4nKpYi5poGMVOdkoEu0NOY90xUKrvg8YJ7Acb0-ZuGQ-Nw6V0QJuWgWXrMGHv",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjW0nnRhzRpj2zYq-UsWOSNd5AmNVU0wSdRxHIFDxz7hDbJ017skLw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6shyUjgeTzR86u70X_Q4f9_mOzz7FbS7HwU0RKcqSYdx8duQzDtcjHC0eV5X6UHA9DYvjULmeAw7BY-O7kGEq2upePGERCc6ZnrZ_zGdmREJ1l51Sly0M-P6cAMmAELACM8xr_9M6s08e",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoVMicsd-EIzKxk9WsOVfvYBhod_eCkK1--4HfK29lgRPLEL51L8dCpTNHSejkf92gfbc6gzlsnc7cfGhSmbnVliUvyiHLkRPH3U5FN_SNpdC5yLNDlX1AUsYCv0i169az9NIAX",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq3HwXPQXMBVqcIdoYeUiOa8lzuMrsO20CLc_RqKIPeP7n0mbhV27ACk-7D6xrsZjtMdu0316pH2vTQ54Jnh9fmRY7SkDDoKGOZpewwPq5srFDf900qsTRqgrv3AuXe9zVKUl2_",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerXjeFnrw91kBKO_VypBLIjn_WTbUeNAT9gz40BGe2KYSYXdq64Vs9D0cxgPfSE_6qTHW8RBhW9oMPu8IF5eAzfmPHNhglpZ_3YGmLOu2MIdkKAuBtMPXA1lTPQKIOva3j6LSqvayeHOvc",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerv5opg_puGqgzKLQyG3JUnMh9lRny38fHWsesi2AjJQFxv2wFY9I0kUSVgxV6_shnH3dns0CS9Dw2n0aaSs7erz_UMezKBnJR2KBpXNzVqvjPvrsJZjx30MAp0ZCg1c5Nv0Uv658hDFffD",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep02FF00eZPB5KjSmEwhfzmWhX55jJlWyE0eAnEV_zjeBbRHdYhotH0y0gvMrO52_z1NHPJDx-WBVpT2KBiMf0m6zxu_h2DkolDRhWbLE2RXIgzlP7xaovNj-GRJ1T42YMH0-cHzQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-BZz2WpaExZrm6pQ5KHbxEHjHC2CZeNgF33MoZR3RxNtPsvPXTYoXQA4AlzeVnC_IG9K5rrbNLjCrP7W0c3GBBlt7a6eR-A1G4OZOgHkrSn17kcMmb_2L_FVfg6dZyzE7c5Zy-g",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoTuDjbx__elL7vbhzc2J-2oeyzubam9d0mU0aOh1Op-g78EwxSMpELcmqwfemcxh83iGr3LEW5oUatgxI7949masVSgox2qCLwPmWkOuIJtEjQa2CN3xVN1PDjf0Bii1SK9k2o",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAweqetlrZP6M4zkAOnPNoTD7CV4ZJl-VkgORMfLvNECr0_kO2MtMBXox-F9cW-R57Qut6eobZ7oTUJMveCTXDhfq9ERY5MgjoF6mb-LlVVpCzdcjN9VKHoy0hJdgEWvNRIxwxQe8i",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwergCpnacD8wgOcqOkmjDR3wjSQmSyPiOWDvNfgPxkDZFRWJROeexiTCDvipZ26aEOClO8BmqEzXfrOp2ljscyiea0lOMHA8CfB-zA24pHTN54KIaSENjLYjpA1O9PvjoEAJgIZfWw",
            "https:\/\/lh3.googleusercontent.com/geougc-cs/ABOP9puA9D_eJEO6KSZ7qQ7QbnsDVTORjrETSag4Swp3gDlzqT6SHeidWKxwTwOn_4lHs0_U7EorOu7BU0gjkXWCc7G0BcXneNPlspMzRh0URrBsVdw_TImcqKUnasOkNIVuUCkJz4rvvHEg0siV",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwer-Ac5Vww_3vH50wujJm9GyLaV0PTvd18OoIacuaEXVug7umefbBYtN8PXkEkVuoxq61fVJPVVZi4xZOh01sPr5f84eAj0yYqiGmGqpApwHphBwvRkysBDlEfbGhxlwmiUI9KqmSf_Izmb-",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwer5VdYpTzS9BnbM7XW9n_OfLi225lT-FUo_vfXBrpkujkMTir5gQ4gpbZ0GFG3dyBcAqn71yYVAy9EAzBQLu51dktQ_chX3rvvf8jp26HvQA0TJinOnJDJtntd1uRuvU4SXBJBvqA",
            "https:\/\/lh3.googleusercontent.com/a-/ALV-UjVtyg_HU2RGKV-T7xjTVKJh3XW49wMrCejtT1aDze2RUi4klW-j"
        ],
        "Place Id": "0x2e7a59d2ca3f2f41:0xe218c6b966badf2b",
        "Top 5 Reviews": [
            {
                "name": "lovember grace",
                "review": "Enak, cicipan pertama langsung berasa pengen balik ke jaman dulu. .  Yg biasa jogja identik sama manis, ini nggak. Rasanya gurih pas mantap enak.. \u2026"
            },
            {
                "name": "lovember grace",
                "review": "Enak, cicipan pertama langsung berasa pengen balik ke jaman dulu. .  Yg biasa jogja identik sama manis, ini nggak. Rasanya gurih pas mantap enak.. \u2026"
            },
            {
                "name": "Michael Hendratta",
                "review": "Salah satu chinesefood legend di kota Solo. Menu d rasa nya joss"
            },
            {
                "name": "Michael Hendratta",
                "review": "Salah satu chinesefood legend di kota Solo. Menu d rasa nya joss"
            },
            {
                "name": "Sinta Lauw",
                "review": "Kali pertama coba makan disini, enaaakk dan worth it. Bs jadi salah satu list tujuan kuliner Chinese food di Jogja. \ud83d\udc4d\ud83c\udffb\ud83d\udc4d\ud83c\udffb #soon goreng #ngoyang bak \u2026"
            }
        ],
        "description": "A legendary Chinese restaurant in Jogja that stands out for offering savory, authentic dishes rather than the typically sweet local flavor profile. Diners praise the nostalgic taste and highly recommend specialties like soon goreng and ngoyang bak."
    },
    {
        "Name": "Rajaklana Resto & Spa Jogja",
        "Fulladdress": "Jl. Lembah Wisata, Sembung, Balecatur, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
        "Street": "Jl. Lembah Wisata",
        "Categories": "Restoran",
        "Phone": "0878-5507-3235",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Rajaklana+Resto+%26+Spa+Jogja/data=!4m7!3m6!1s0x2e7af853b290761b:0xfc7dddf0234f2eb1!8m2!3d-7.8299211!4d110.2878846!16s%2Fg%2F11gfjtp0n5!19sChIJG3aQslP4ei4RsS5PI_Ddffw?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8299211,
        "Longitude": 110.2878846,
        "Website": "https://instagram.com/rajaklanaresto",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepukYI2nqKg1KirQA_z6oxYRuOK02DhFKf3YpI7h0q6O0-YTQEsf69SDUsZmhT2qq_gosCMdveh6AtB8wIe2jdlWGGkK7NoGPaKe-voi6yEywDEgUOKLM4iInBpCe_1IeKOZxRT4PfyxQU",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoVp3LVcIROx1q-yGBqhZ0QqPu8lY_sP4JDkfsb6gzK3nzCwzNrh6lz5aCBBZjhAsBw0qytKYoz4EHDgk9uwT9fF5ab13N9kf_z8SpiQaSz-Tlv9eUvUjfd3ua7ba1U-VD8Omv1H9jIq1v4",
            "https://lh3.googleusercontent.com/a-/ALV-UjUBcfhDcGLMgO_LTPs611aGL_SerkXj_WzLuYxFPXzqs4BID0Pl",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoX-gf_1X8rSqDu_-rd5vvxOHIT98QisCgMqa7X2nqx6z9eNh4ZUCDYo19EKj-vkRD2ahhcW2yc5XpJyvmTtSRYCu1rKwdjVkpajQDV7Wb3CXmkN0BGpgP5ul8N36k5bY8uT0UqTA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqO2aOOxncIMviQFJ97aXhobAzlO3BNi1qgsKPqvD3AyIpE6HJTyKXIzmRXDQqurzcvCGSCV08MGvdixtJMLhtIKNU772sTvaVQN0An_skfKYND24Krt7Vdsv6HBfGr_OG0R_I_R3jztYQn",
            "https://lh3.googleusercontent.com/geougc/AF1QipOOkkKJT6dKtXd8yMMnvv8PXoewHouuFmHjlnF9",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepGC2BHxCdB-_HRAA73p77rknGjTrU5yR6slfMbI2gSRAUki4y93rNNfeb0NZgHRvjS_Gf9wX3f1zCdz5G3ieJkW7rOOFrEopURPGkED7ExFTVM6WX9R07jU68C2A8lNttiSZWckJyUkpV0",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqZFngmqmGTZCcXX8D9FMJdbLhsjwvEBUmULkGb1AUB_3dBDpXIeo1BDEtsFjzBUgdPTz5L0741wKvyRIJtGjm_D0eF0FNadxaoYMzlZSil6Sf2xuVubWWAj5o3NDeSZZQ4EUqtPQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep0Pl5q1Fq6f9KYqbZyIgLTKiBK5IM6sezP1x7zc5rGXBp8JJojNvhmVzf1ycW6nQSMonVV5uKctQ6luj415CLK8iYen25ZWBpAMn0zQ4dONiR_J2iE2GXBYX5H0NkhmTAPSCbfZA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep8RdjzHtVkxJjtxRAJDPvM2NQG5manHuHw6P7NJABJJa9pw-gvEYuK8VR8JTk0dphKifyoTO6WytKsRL6Pmwtk4znol6a0c0k97CHxZH4-Uif2uDudQ2pL8Gdqc8ht7bFFWfI",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer5YS0f2KwJhoG7265J2UdmhUFRhoODG-c4C_-Ki3-IO9v5M0jRjYCjedYaFodO1to6ANnk0rwq7QrgHRaf_2c5bkWbjvEDQ2cAYySCS39svERTWaEN2818NtWEkytd2g_kxZAH7NAuXJ6a",
            "https://lh3.googleusercontent.com/a-/ALV-UjWASVPa8hO9X_X6PPNj0C6nqzmz3XSm7vh58QebOWfqSrY1Ku_d",
            "https://lh3.googleusercontent.com/a-/ALV-UjU9791Gujx1p8qN7GCQO7CnnLvlS65n6-bkoNuwVvCInNK7RgxYtw",
            "https://lh3.googleusercontent.com/a-/ALV-UjWN7UlyccRVMe6DClW84j-kXTrHx9oQ5w-L_0eJsoTIsAVU5YOA-A",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9puRXitmZbXWtfevApC2BV0z5kDkVLVUcKF_nr2U9mgQm0ugs3oDZCBwF1EXw3EA-vELQaI9XfM2rPUuKJGwm4Pysy8rt0ocaGfhSxXHT5OLnfXz6uF1v-omrnbrm7y-LGeEFDXFsLlvjpab",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psY2MTMv3iZsGNMU0GwDt0oyX7zJjY6oOcREOyn3mRDVpq5UxH3HRKr_xvn7QxTEQ7yQPtN2_s24xEKlT0rI-A5tTb3pdmDKAS8QC1zUDfyiZorJ-Teo7xbyFbo_t9pYGmIIJTQx9ynl7K-"
        ],
        "Place Id": "0x2e7af853b290761b:0xfc7dddf0234f2eb1",
        "Top 5 Reviews": [
            {
                "name": "Nina Aditama",
                "review": "Datang ke resto ini rasanya bukan cuma soal makan tapi soal pengalaman yang lengkap dari awal sampai pulang. Bahkan dari awal sampai, kita sudah disambut ramah. Security sampai bantu bukain pintu mobil, stafnya langsung menyapa hangat dan \u2026"
            },
            {
                "name": "Nina Aditama",
                "review": "Datang ke resto ini rasanya bukan cuma soal makan tapi soal pengalaman yang lengkap dari awal sampai pulang. Bahkan dari awal sampai, kita sudah disambut ramah. Security sampai bantu bukain pintu mobil, stafnya langsung menyapa hangat dan \u2026"
            },
            {
                "name": "Ivona Dwi",
                "review": "My amazing experience here !!! Pertama datang langsung di sambut dengan hangat oleh security yg bertugas, beliau membantu membukakan pintu mobil juga. Waktu mulai menuju resto di sambut lagi \u2026"
            },
            {
                "name": "Ivona Dwi",
                "review": "My amazing experience here !!! Pertama datang langsung di sambut dengan hangat oleh security yg bertugas, beliau membantu membukakan pintu mobil juga. Waktu mulai menuju resto di sambut lagi \u2026"
            },
            {
                "name": "Indah Ratna Mutiara",
                "review": "Restonya luas, bersih, adem, pemandangannya indah banyak spot foto pelayanan nya cepat, staff nya ramah \u2026"
            }
        ],
        "description": "Rajaklana Resto & Spa offers a top-tier hospitality experience, marked by exceptionally welcoming staff and fast service. Guests rave about the spacious, cool, and clean environment, which features beautiful views and numerous aesthetic photo spots."
    },
    {
        "Name": "Isvara Kitchen & Coffee",
        "Fulladdress": "Jl. Sultan Agung No.60, Wirogunan, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55244",
        "Street": "Jl. Sultan Agung No.60",
        "Categories": "Restoran",
        "Phone": "0877-3344-5562",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Isvara+Kitchen+%26+Coffee/data=!4m7!3m6!1s0x2e7a577baca6ff71:0xcaf3081cc14b51ce!8m2!3d-7.8019909!4d110.3799287!16s%2Fg%2F11tj2bz7f4!19sChIJcf-mrHtXei4RzlFLwRwI88o?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8019909,
        "Longitude": 110.3799287,
        "Website": "https://www.instagram.com/isvarakitchencoffee/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep_-xV3lRGvDQ9UYhsfDEc1qQONFZk91RhAqOP62Q_bhpFqSliJl6ZQq5UmyhagH-C6xJZDbuul8xJBdfUbN7QAy429Pp7IFzXQjomHmWKi8guumlnIewwYRYFY8eTp9IrZ6Cp2zwBXLJwg",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjW0xZRgFLKYRYi0_timvyXW6UaDrQYemMftWGbS9f9vbcpY0R3q",
            "https://lh3.googleusercontent.com/a-/ALV-UjXP93z264fWTuyq4BWZsmPi5vfN6VdRqEI7YQ2hPUp3swy81iKbmQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepra8pix3KnHZmmmEe4jDEgj6T5rsbHCfOjPYnnLzDsLsyeqMIkJVMVbDgcmcbnCM_TCjEBqcVYLyy8Hq8QfuoONMuXETxugjzgBAoWtkpJfRK8rCKTXyfvgeIv_szwxpZTpfueEw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqHjtFSXzdj80SN6dVN9YuNnEb2O_2cwXxHDQrYIDp8Jd2k2_-4t4tnIy-FaGmX5MzrMcEjq0j5C8yOP47SnJa9aoutNFUJslRz3xvJOvbd04smwdIJ1tzC_HklHzUbCIROp5w",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqBjp78_CuEG42kBQs_l_7-43ZsAMG4ZZKk1mdQ0sl4kMZjC3Pzyo5KlgP5Vw1c-_-1NlE89m1Qxs-jEbvG9tWxbsaIOrWZx3dFtJLaYGsGWs6EVMrNJIFg8p6HJJpcJepBWj4iQpJtSB_j",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqy-5rHs7bKSY_mlM2jz_GXk-tx1BIYK4c7nDHDP-YqkhYGBvtRqdxVhk5Ave7h9WvV63Al9yDLa1vzzzl_oy7fIst3DwiXwbff5Zgjhw4twQVYRvk8C3_DLhh3VhJe5Wr0G0WKKZWz4kjK",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepAyg6NdMiH-b4YY9wdW9ZNeJUXztiFaKXj0LHi10stIUOHCLP7Dot1szz826jhb2efcM8DYuSyQ2RnCMjn8WEhW2FzJAhcrWmC_WM6Vx-OQuP203D5vFUUB3oiwjEzaZDAjQ35tuQCS0lZ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo2XGLyFVziQwW_e8iBwlc4llWwt_DDRgUuXA_RWU9yfXOGthb_ec592k1W5mUrHIfEZJkhGV9K1idIAsWApcb5L-QmuukcGdpRktzGjbR0asvXJemrfqATqh3Q_PUE9tCH1i7JrxSXVf_n",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptQ6i9H8C905kgC449EiFSd-Bm-6p3NovOEg-pPfVGvp3rN_czTUieEY4KMuucTBuf7njjrWpnjwTUUDeituy_v2gc16fAuofTT8cphjpuxjXGnSLYhlX3Ml13Jq7EIwofXLbOZiWhk6fu-",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pssnrb7ZPEp-v6xS1nlw_R3qyFTRy5kVaEeYaJOvPfjqUl3EPY1xPYPqXaeNr6WNJhNsuZSgvwiIaSmgjS4smKmbqNeDsknPnzMN2RIUppQ6KMllij5QVX-68uep-ABYuKQPWiJduLsdYpP",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptkA1jZ2VX2rCSvHNcM_eg3ZpEPiMtdi9XJhZIR1jkvN-i9eTFyopirm65tj-Ujb5mzEFv12mBATMFaSzjoM_E3JOZl1l1JkQ96VnoUIcq712FCUR_spiBx-Nb3NxG10UTUFfCqWrkAOJYO",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvCE6T3z4O1wF0MTDCflcp2HdzsOqysTtersN1rIJBXzxrCzppdLKKa9EfHL0uM3W5w-8ACBDeMY3OUf3htYLjM8MEebmMYxcOu0xLsTXoMmH51w4Y6VW1Gfxa14WhVnbmfBwVOHIbSoqOa",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psshliEicdf1eqiydOK49U5HiAUbaeXiomPE0n3vfMreG5lviXbl-R26N_KsiveDkzSswc6XsCGBWMnUl8Hq9IaVQGLanZhB0RRokr4f39HNLyS6ZEIVZAKGFcwmVx-gRFuOBHJ124NH7nh",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepym50-lIbGMPKy5snxchH8svNitpmstppg_deuEtK3Eu_drZitG6z0vV4sH1iDszvS2tzyt2_TXpkhLpC9FtWnvQz2R_mtG_HyLU5aYc_K0DI4fkSXQSVVCvVDUMlRdg3_6GA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq6pFj0R8j0OqItPkCZ7o9AUNcJ_Qs7WmMJUnRV27G84pSinGJyZFCCNiM_C1zikp7qSTu80Ds6Kmm7ys2jX_7MYroRJLOo7X6_PhMI9VVfPmTskSFRu0mfXZRo7DWHiMDQUjA0mQ"
        ],
        "Place Id": "0x2e7a577baca6ff71:0xcaf3081cc14b51ce",
        "Top 5 Reviews": [],
        "description": "A local dining and coffee spot, though specific customer reviews are currently unavailable to summarize."
    },
    {
        "Name": "Gadri Resto",
        "Fulladdress": "Jl. Rotowijayan No.5, Kadipaten, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55132",
        "Street": "Jl. Rotowijayan No.5",
        "Categories": "Restoran Jawa Tengah",
        "Phone": "0821-3890-7203",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Gadri+Resto/data=!4m7!3m6!1s0x2e7a578e219a7083:0x574efeaebda13fad!8m2!3d-7.806415!4d110.3628006!16s%2Fg%2F1hc4rk_xt!19sChIJg3CaIY5Xei4RrT-hva7-Tlc?authuser=0&hl=id&rclk=1",
        "Latitude": -7.806415,
        "Longitude": 110.3628006,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqWtPmcUjMhi6J61OpRrnI-z961jrwI4rHWEuyNWYywx8qoaV_NqEBMg6QgVVHjZSgIZLZH__bgqAC2XqmFwfAbxbuyCSmxvRRKYzLR-FgfUFl2NM0s7C3GepzMR3avf3N39RrD-S6_Jbk",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerNxXfeys1-3jtfY6HB5OIQ0a1Kq1jjPaoGS2o7UjOcQoODKpkQietZUKWJFQd04qjer4vf8Wfjx-4pYZKg0vtj6XH8ruC7CmVtpIsC_3tfKhs94kvMBbPoIXqTKPGFWVLEwlhk",
            "https://lh3.googleusercontent.com/a-/ALV-UjWVbp33Hlt_5dnTo9qususdRv-IDALN43ZYSURbib93N8igyWfK",
            "https://lh3.googleusercontent.com/a-/ALV-UjUdrtjwpB0M1o5RQZpTWkw7WqKqWqCjswRUXn0gvVpUDBQRaGfA",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoe5ehXCbB_mtcxYDOPBU8QnLZ6z3NnZ5EbW_BkVUViMEyuOHQjH257fEnQco1a-Wyks9gHH8t32xycqr3CdUMMfw7pw4lZ0k_la_fSrZjAm0n_cMYoZ57mwjpdR71vZL6LPpIL",
            "https://lh3.googleusercontent.com/a-/ALV-UjXAzV6u5FXJRuJaGaF3xqeJXmyqfADmiT0FiP6V0JZHtXJqan8",
            "https://lh3.googleusercontent.com/a-/ALV-UjVZ1A9dJrHPcq-370ON3OdOpGmmOUw4wSBzgvnBhUk_V6UYI--i",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweofhASLI-XDdqYveJeMA2M9uWw1fhxi5fqE64ujl0yx_kWpoF1-vVuye4ym5R7iBW3jGRSabgm8LX-EQlMUjI-FZOfqtttRRMIaXjGYaH-ZIKegLhWjuwcZzd0DfsZzUVArIsUV",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerEvlCYSri4aUbGnPzu8Zx_IMpUl8bSTsf3HflpDFVdo7lL1syGh9d9UC5CFZAXa6-lqn8gkC-3aNno1mPNvjfQjVXJymBu9VCktPiwIx0UFNvdUt1WlKZYkWdDv3frDYrd4MCDJg",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pub630I8pYxMCxhhmxAU1_i_Mme7G31qh940RDTVX3X7DiH6vbsKoXNGXjXOG2PKim-bnxiqCyhOHWh4zOB13Wa47_xZ_krwcJjVCR2YZF1sbMc4tYmn3HDVTALxhL-WBGRB4KtJf5KIO2p",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt3LNyq_zuWY4uJVj3K01bIFUkwKlwDOuqW67KyupQ-nZnvR4VCHktYF-JNfCQXf2Cd7g0534ZeFz787_7Wd4IjiBLqCbpx0LTYstUD73OpgBpQU_cXQkdlu1O8wuEPaN-zn7otcz7nXKP3",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoot3d8kNsD8Z52g0znNF1vq-h8dmlhzNyHHG9xSOxHTYrf3MUSor6RztjBp0pqtNimTopqoJ0oyNlniYPsTEuxLtUp9nLlACvW1Sbl4K61anbWiTsbMVoBavM3V866uKAs15YjDQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbfJm6TakMK8BFlT9u6xJjafYtDyjyiG7bonHKN_JOdGp0C6yoKPHa70iCxqlq56vQZrmNjPhKDAm6xQqVKPFw8PyHFrxTNYwYePk5-GTvFPUl954yZVwL2LZX2N-gs2dA5tLE",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psbB1pdXlZuT_qoQg43jY0MUJSKwjK5IUIMflwN8GWKP5vdraTGN6-UauIo8jt6kXmlaFxK0Z3ELjkOG_M7yVWKwWFzJ__fHgKfpcxPdcRDgJk95cFnodDX5NoaQHbDPP9PFKN_asnxsIb1",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerotuBQGnoCCiqy2OjFSFrWAtJui36fCKd968f0T7MHBo5VkMm2QEih9GS99WQVFh2HqaYs8WwolVHNo-omyrLtvHLXM7sKo-1K1eXB7S5oy2rMY5Y3P9GZ1IjUGKnHibCa0sYX",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq-siVljm6rmiLvlGzhnbZ4sXHJSMK7CRADiNujA9cyWGa5JQlzA4Hcm3HyG_fV0F8ZbX4trVymVg_7xnXkIroY599ne8lzp5iB4JRrph2qKMhcsvagJtbeegz4WoGqM6aEFtLGPPNmKlYg"
        ],
        "Place Id": "0x2e7a578e219a7083:0x574efeaebda13fad",
        "Top 5 Reviews": [
            {
                "name": "Junan Agustia",
                "review": "Pelayanan ramah, nasi blawong enaak cocok bgt sama ayamnya dan nasinya pulen, arsengnya enak bgt ga manis mirip kolak tp sepertinya tanpa santan , setup jambunya unik rasanya tp enak, manok nomnya yg disini aku kurang cocok agak aneh rasanya , vibe disini bener2 menyenangkan ."
            },
            {
                "name": "Junan Agustia",
                "review": "Pelayanan ramah, nasi blawong enaak cocok bgt sama ayamnya dan nasinya pulen, arsengnya enak bgt ga manis mirip kolak tp sepertinya tanpa santan , setup jambunya unik rasanya tp enak, manok nomnya yg disini aku kurang cocok agak aneh rasanya , vibe disini bener2 menyenangkan ."
            },
            {
                "name": "medyarasmi nurman",
                "review": "Menu makanan minuman orderku enak semua. Suasananya tenang, bersih, rapi. Banyak ornamen estetik, vintage dan memorable di dinding rumah. Ada museum berupa sebuah kamar tidur  Sri Sultan Hamengku Buwono IX di rumah ini dan beberapa ornamen vintage didalam kamarnya. Ada satu set gamelan di halaman depan. Parkir kendaraan cukup lebar."
            },
            {
                "name": "medyarasmi nurman",
                "review": "Menu makanan minuman orderku enak semua. Suasananya tenang, bersih, rapi. Banyak ornamen estetik, vintage dan memorable di dinding rumah. Ada museum berupa sebuah kamar tidur  Sri Sultan Hamengku Buwono IX di rumah ini dan beberapa ornamen vintage didalam kamarnya. Ada satu set gamelan di halaman depan. Parkir kendaraan cukup lebar."
            },
            {
                "name": "Jane Satriyadi",
                "review": "\u2705 Bersih \u2705 Nyaman \u2705 Ramah \u2026"
            }
        ],
        "description": "Gadri Resto offers a deeply cultural and serene dining experience, featuring vintage aesthetics and a museum room dedicated to Sri Sultan Hamengku Buwono IX. Reviewers praise the friendly service and unique traditional dishes like Nasi Blawong, though some specialty items may be an acquired taste."
    },
    {
        "Name": "Warung iLate Yogyakarta",
        "Fulladdress": "Jl. Gajah Mada No.16A, Purwokinanti, Pakualaman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55111",
        "Street": "Jl. Gajah Mada No.16A",
        "Categories": "Restoran Indonesia",
        "Phone": "0851-4295-0133",
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+iLate+Yogyakarta/data=!4m7!3m6!1s0x2e7a5763df004483:0xe4451742389a03fa!8m2!3d-7.800322!4d110.37325!16s%2Fg%2F11wq8qc0kf!19sChIJg0QA32NXei4R-gOaOEIXReQ?authuser=0&hl=id&rclk=1",
        "Latitude": -7.800322,
        "Longitude": 110.37325,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqKd1_Jm4rz7xHi9nahlbhv7Etdqc1CVfzJuuptTWoBdra_601t3YrXUWFCa0Dd5p7ive-sy3cmTapEQCIujOGbvZ7Ws3iKE5YpXygXeY0FksT1oP-p2GH0qxYMrPFdw6ljEtB7RQ",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoqKx5Wj1cpYrJPVLPQ68Wg0FZ6GBTVnyrnO6dAubttZKNgNHDe-_iOfM4FiOYTNHogxAhjYMbHfA08OOcq_PE56N8FssyZtpijMUgpELR3rXSw1QS0p6NtWTrG9kDzzD5DZl89",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerTNZN6MKs-qKewvJVTvhCy6ovbUGL2lKwkgXrI4pzLAqU10Bq_JzYXS-qnVc7cCbYcM4808F7s5ERBTQekaoIqI4rrA70ajk210-M5X46_fXeeCqbUcQmqWbyI8qDrYbRDgc3J",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptpzj0dc0rCtgaIR_M6HaGoq3XXEdIAeT525LRunit7u4ryhqQNEfXzDdLFaBuksWEO_2OT_x3F1_mwvXFNBG7e68zg4vTKHFL_NoQ-b_3CT3Q2RH1znTO8eXcnve-V5wRrRbdC",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer8L9EqwlwEiFSz_g8gowbxI3H8hkXMAhpNeJyE4xBmuYCNpPkmEOgUDtkx5PkQAxWhQsS93CYmi9TkqnS6UwdTvqLnDgvsH0GVkXSfAl_-MYt8IER3TCmAULyPfmwjJG0CErk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerELiDcI3qb8b4FC3j5oa0IcHlOjzNV7gsy92WWW_a7JGQG6tKBz595F8LIxixgsV0Q33LNG3NGGWW17853-1wKyXDFZpZRrcWO5HP96YfguAT6J4TQTljo-zoldPsBNMrnbXLhiw",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pu94qG5A2anM4sVpC4epWWofGpH_p6hqlqJJkI7HxhB787VRZrbAs1238EHvE5M7_xGUAccxWTAwiOqgSuBmsFJ4EzEuJQZIBDl7D9LtYv32ESeyt4NW_xcgc-kBOOshzuesuuR",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ps16n6nevqTpj3LUNqBu2mNN3kLTsSFTszvyZv9N40D7_kb3FS9MySngHKz8RpJtD0r0IueOTmBn-iklz6t53XNLbNHK9Bog-8eVyc7IgusISPKjSjC-96iKx4XePSXvcFqRE0UcwcKAdY",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwertriGqP1fGrMAifXUAhvu63240upc2jt1vZKKo2AwASV7I-uy4dM7o4YijJalrCfleyqstWKRqtIIyS7U1-DdffL1l5geassgYc5QJ6vCCyRdV1R4WZ17jxtv6yHpeKhakiXr3GA",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwerWEwb_3R4RAmisHmbVD9lPGKWZmD9OUZsO8cPysdGlOJssMn7gPnzoB4DzX935quGEpXOqIcco1E1Z05NXKi1168g7dGphyzx9biSx6_Z1xOgIVDktJbeHlwH9Zd1JRe609fFQ_Jegefc",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwervhXd-yEBjwTvHPdnAnKG-F-3TMxApj5h2SSjzGT1XAeD9Y2BXKGV86S408tEf3keOWI6GHlUYYp-eJNQ0Ug_OYsWTjCUobe4tE4TJzkixO0YJxshbi1Y_Pgfp-ygaUF0Iwtb7",
            "https:\/\/lh3.googleusercontent.com/geougc-cs/ABOP9puj7rkjbW2yRanwAQZ0wzXIng0hIuE-OTAUNBN8Ij8fbP41y5WjxdXpAQfOh75Zubw6GXg0C3nE9UwpPajkJ1sY0i7svvjGcONS6CrtlDlZvHfpECvY5uROD1BnAkcZ_6-r4iyPan_-NGQl",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwepxES84f5tr0e4FVW25wSJlWlQNfRz9U-xKdsAztUu8KBx0vvfjfbrs5YtMH2ahaQ1bdq-SMjBzsSV9RJ4k1vZK57TELOyeKKfogjQKnlYVfekyBy_zY2Ihyly4SRDmyJr5v5hB",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAweoHAGgYpHMP6sJH_bwGh6bQupzHrMOjKwv9mtmkl0ZXJALlcDc6FAZV1Auc9_F_wo4NkkBHrVY_U0N_sXhGhD4bq3DY_J_b6LFWr8x_70W3IKVo1azIiF83OCTx7hZS9bU2lKvY",
            "https:\/\/lh3.googleusercontent.com/geougc-cs/ABOP9ps3_eJ-R-MO7Og-4-uE34YyETImcoWudSRzUpYQIzOtAB38O7MeJkt5yVnooqWw1KAGvY-59qBvMVYTBjmS0kbbPQb93Obz003u9nGcw12vm6W3eElvXHaF_Qh5Ty6ywhSPvwFH",
            "https:\/\/lh3.googleusercontent.com/geougc-cs/ABOP9pt-ksYrAp53b7y7khaGNmvqg1MXFDRJ7XrA0lfBaTBNeyeQMO5EijRVWnd8y-Q6rZU6BIJcCVDYRF8-9FeyXUT3unAf8rkoGmoxIQR40Tx_RVcUgPfRtFJMTS0NnLwccsbO-oYKpIT0IoNL"
        ],
        "Place Id": "0x2e7a5763df004483:0xe4451742389a03fa",
        "Top 5 Reviews": [
            {
                "name": "niken pratiwi",
                "review": "Makanannya enak banget. Cocok di lidah. Rasanya otentik Indonesia. Penasaran karena sering muncul di shopeefood, akhirnya coba dan overall enak semua. Semoga laris dan usahanya awet terus ya. Next, mau balik lagi ke sini."
            },
            {
                "name": "niken pratiwi",
                "review": "Makanannya enak banget. Cocok di lidah. Rasanya otentik Indonesia. Penasaran karena sering muncul di shopeefood, akhirnya coba dan overall enak semua. Semoga laris dan usahanya awet terus ya. Next, mau balik lagi ke sini."
            },
            {
                "name": "Alfeus",
                "review": "Cari makan sekitaran hotel tempat kami menginap, dapatnya disini. Awalnya ragu karena sepii banget. Tapi ternyata makanannya enak. Empalnya istimewa, sangat empuk dan bumbunya merasuk sampai dalam. Dipotong pake sendok gampang banget. Dan yang nggak nyangka, menunya komplit! Varian makanannya banyak. Bahkan ada coffee bar nya juga."
            },
            {
                "name": "Alfeus",
                "review": "Cari makan sekitaran hotel tempat kami menginap, dapatnya disini. Awalnya ragu karena sepii banget. Tapi ternyata makanannya enak. Empalnya istimewa, sangat empuk dan bumbunya merasuk sampai dalam. Dipotong pake sendok gampang banget. Dan yang nggak nyangka, menunya komplit! Varian makanannya banyak. Bahkan ada coffee bar nya juga."
            },
            {
                "name": "Sitti Rahmawati",
                "review": "Sering makan pesen via ShopeeFood, rasanya tuh enak gitu. Tempatnya kirain kayak warteg atau warung gitu ternyata semi coffeeshop gitu. Keren sih konsepnya hahahah. Coffeeshop tapi jualan nasi paru, babat iso gitu wkkwkw wajib coba sih menu lainnya"
            }
        ],
        "description": "A unique hybrid of a coffee shop and traditional eatery, Warung iLate serves highly praised, authentic Indonesian cuisine. Customers particularly highlight the incredibly tender empal, the diverse menu featuring paru and babat, and the overall excellent flavor profile."
    },
    {
        "Name": "Raminten Malioboro Resto",
        "Fulladdress": "Gedung Hamzah Batik, Jl. Margo Mulyo No.9 Lantai, RW.3, Sosromenduran, Gedong Tengen, Yogyakarta City, Special Region of Yogyakarta 55271",
        "Street": "Gedung Hamzah Batik",
        "Categories": "Restoran Jawa",
        "Phone": "0811-2652-166",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Raminten+Malioboro+Resto/data=!4m7!3m6!1s0x2e7a58263876d1dd:0x17059a30e740aac5!8m2!3d-7.7991661!4d110.3648118!16s%2Fg%2F1pzpmpr_v!19sChIJ3dF2OCZYei4RxapA5zCaBRc?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7991661,
        "Longitude": 110.3648118,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweocDXW8fuZ0BtHyuvduUfgTcX15Z33q24r6aD4jbwfD26WbHI1S640L7mNpq1OOpcTvhZjH5S82IqPM3CwQFIdVh6vWpURskLfVz7vGH2M0tNDw_QMptKH2FId_5cI_t0hxb6MnQs-8ygSX",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweosOhKJ_zM_5nHp061mehOYWzyiDMGFoJ3wOEuFWRqNrav8NVKzL8t7JX6WOSnsrKuN7K2RzVwmw5NqBt-xJM0qWUXUCV5Y5jvux1msuXRbY6zagSH38Gb8WXV-zLHToSKlJRpv",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepSpvC7ufFlRkNHlBoOFGUoXmMkBMSbNd7W-oyBToDHS7S78MQNiCRNSGPpFk4t2VX9_ebY0QVqtEnNTDia4RMVPPdZO2JEJqmN9mpMBCOS5BSuW3f1wItnVJxwzrcazwRGtrql"
        ],
        "Place Id": "0x2e7a58263876d1dd:0x17059a30e740aac5",
        "Top 5 Reviews": [
            {
                "name": "Lapansonindra LA",
                "review": "Once upon a time, jaman masih ngekos di Jogja, sering banget main ke Raminten Malioboro ini buat beli souvenir, batik, dan aroma terapi. Sempet pengen banget nonton cabaret show juga tapi ngga ada kawan. \u2026"
            },
            {
                "name": "Hastea",
                "review": "Letaknya di lantai 3 Hamzah batik. Tempatnya tertutup tanpa jendela & tanpa AC, hanya kipas. Nuansa remang, mungkin karna untuk setting kabaret. Atapnya juga seperti terpal. \u2026"
            },
            {
                "name": "reeva damayanti",
                "review": "Lokasinya di Jl. Malioboro paling ujung (lebih dekat dari bank BNI), di dalam Hamzah batik lantai 3. Resto ini kental dengan aura tradisional, makanannya enak, mewah, dan harganya lumayan pricy."
            }
        ],
        "description": "Located on the 3rd floor of Hamzah Batik, this restaurant offers a highly traditional and somewhat dim ambiance, often featuring cabaret shows. Diners praise the delicious and luxurious food alongside the availability of souvenirs, though some note the prices lean towards the expensive side and the venue lacks air conditioning."
    },
    {
        "Name": "Sego Telkem \"Mbak Nur\"",
        "Fulladdress": "Jl. Wijilan No.8, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55111",
        "Street": "Jl. Wijilan No.8",
        "Categories": "Warung nasi",
        "Phone": "0882-3232-5393",
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Sego+Telkem+%22Mbak+Nur%22/data=!4m7!3m6!1s0x2e7a57441acaa88b:0xeea4a4b057dc5b1f!8m2!3d-7.8039656!4d110.3665066!16s%2Fg%2F11t9j01t9z!19sChIJi6jKGkRXei4RH1vcV7CkpO4?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8039656,
        "Longitude": 110.3665066,
        "Website": "https://instagram.com/segotelkem?igshid=YmMyMTA2M2Y=",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweptnKU60E7Oqh5GiQGjAmAppGqHDYSjUgL6hQGTG4VcvQcnBy73nQlzgOGvRO0AHOcX0NDSzkkqbjCG_3pk6Ha1vqLoB9q-NAZK0rFD0pW3ze-Goz7dyBUIzxZYFvAZz7DoID0c",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjVPRQ29JdNWTRrdYldFlMoFv1Xz9cfb1tSFkjGQfDTYTmJYT_Tn",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepXo68VVjN-YatdhLLZ_jsgeU0VJwV9hZHWKtdTcctJe3Hykw-a_0v-eFojE1SIIV1Fvt-k429Q8I6l3MOgPDRIrSMWJCEcgZdRbLC6EniZuu6a1RERE_QQUsocvJB6E7bJ8OuQ4sCz2T6_"
        ],
        "Place Id": "0x2e7a57441acaa88b:0xeea4a4b057dc5b1f",
        "Top 5 Reviews": [
            {
                "name": "Safran Achmad",
                "review": "23 Agustus 2025. malam hari itu setelah menonton pertunjukan wayang orang di museum sonobudoyo bersama 2 orang yang baru kukenal beberapa hari & 2 orang lagi yang baru kami \u2026"
            },
            {
                "name": "Fraya Fitria25",
                "review": "Udh lama bgt pengen nyoba masakan inii tp bru kesampaian bbrp hari laluu. Rasanya pas si, ada pedesnya, manis juga, tp lumayan pedes buat org jogja yg lidahnya cenderung manis. Porsi nasinya mnurutku cuma dikit si, jdi kurang mengenyangkan. \u2026"
            },
            {
                "name": "Santi A",
                "review": "Masakan yang menu lauk pauknya banyak pilihan seperti masakan rumahan, cita rasa cenderung pedas manis. Untuk porsi normal nasinya tergolong sedikit jadi untuk yang lapar mungkin ga kenyang. Untuk tempat makan sedikit kurang nyaman karna \u2026"
            }
        ],
        "description": "A popular spot offering home-style meals with a distinct sweet and spicy flavor profile. While the food is generally well-received and comforting, multiple reviewers mention that the rice portions are quite small and the dining area can feel somewhat uncomfortable."
    },
    {
        "Name": "Warung Empal Bu Warno",
        "Fulladdress": "Jagalan Beji PA 1/423, Purwokinanti, Pakualaman, Yogyakarta City, Special Region of Yogyakarta 55166",
        "Street": "Jagalan Beji PA 1/423",
        "Categories": "Rumah Makan",
        "Phone": "0857-0175-8677",
        "Review Count": null,
        "Average Rating": "4,7",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+Empal+Bu+Warno/data=!4m7!3m6!1s0x2e7a57eaf9193b1b:0x9d30e7942137f010!8m2!3d-7.8001545!4d110.3720755!16s%2Fg%2F11f7jw07cg!19sChIJGzsZ-epXei4REPA3IZTnMJ0?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8001545,
        "Longitude": 110.3720755,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqCtlyzaucL5VNmamD-4-tTNfksKpV6P2K6vS4Bv0EPrsASwHghw-PwvDF585JUnAhxGUFV0Tl9IaBSbxZCaGADVu3nBB59ZRBqyAb25eMZlR-kf3sodlweIfxOfct_tqfjjOK4vxz02lWW",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepMl-S8cSHmahd56JPz1HSPNCea2N5WQH7JL8Ul1owJCkzOzC_wJBToHFe47PREWvS3rPvQxIx0RQKkz3aFfaLZe366198XwqGKt0IcyImC-_BLcaT42KyxWqGeh3ZC0F-6oC5vJE5dUQYf",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepLgG-8QL_xiE14Ni2_KVUQ92K0bkGEZtQlkBqnmF01Xv1ePQMNZV7QBGfgFbP65RcEkG1Ex2RFQWNnS1Tnl5URwGrHiV-VrDmM03ZulIBw5xyitUd96HVMbsEFcEH9HRzy7BAP"
        ],
        "Place Id": "0x2e7a57eaf9193b1b:0x9d30e7942137f010",
        "Top 5 Reviews": [
            {
                "name": "Elizabeth W.",
                "review": "Empal Bu Warno di sini cenderung ada sedikit rasa manisnya sehingga cocok bagi penyuka masakan manis namun tidak berlebihan. Lokasinya dapat dijangkau dengan berjalan kaki atau naik motor. Tempat makan menempati bangunan lawas yang asri dan sejuk tanpa AC. Pelayanan ramah."
            },
            {
                "name": "Mahesti Amellia",
                "review": "Empal Bu Warno yang asli, rasanya enak dan nyaman di perut. Lokasinya agak sedikit masuk gang tapi gak susah dicari kok. Empalnya empuk, kuah sopnya gurih, enak deh.."
            },
            {
                "name": "Theodore Suryo",
                "review": "Hidden gem banget sih agak masuk gang yang cuman bisa dilewatin Motor. Makanan nya comfort food, hommie banget. Empal goreng yang sedikit manis dengan kuah sop yang gurih asin, membuat rasanya balance. Ada sambel juga yang agak pedas. \u2026"
            }
        ],
        "description": "A hidden gem tucked away in an alley, renowned for its tender, slightly sweet fried empal perfectly balanced by a savory, salty soup. The vintage, airy building provides a cozy, homey dining experience paired with friendly service."
    },
    {
        "Name": "Gudeg Yu Djum Wijilan 167",
        "Fulladdress": "Jl. Wijilan No.167, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131",
        "Street": "Jl. Wijilan No.167",
        "Categories": "Restoran Jawa",
        "Phone": "0821-3869-7888",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Gudeg+Yu+Djum+Wijilan+167/data=!4m7!3m6!1s0x2e7a574135fe1069:0x38ddc01ac0a38eec!8m2!3d-7.8045659!4d110.3667533!16s%2Fg%2F11jcn6w9cl!19sChIJaRD-NUFXei4R7I6jwBrA3Tg?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8045659,
        "Longitude": 110.3667533,
        "Website": "https://gudegyudjum.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoCl3tmWO1pvwJqxe4JuE7fT24OQpejhwGqlwFyAUzgQk7auFDChgN2Sa1XKaP0n_912UBLtGsXsplWgUqlVvmHtVVQ9svyJKAgzLO7GmjzZbXnqTp3tceTqXoRrheeroKQfJDV",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerM9_e35EbsUSzL-bc--rrWSqEiRD0PGTrOr770RLH4m87sLi4SzzpS2sqZCmJsQ-h4WYz4xOTMk9MpLnB8xSBbQ-EZ07-O0siXeyz6WXcnoKhyCIB_M0CRD3-2g410cKHswfoMumEnu2mu",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJVcg5JgmTPsaQcG5Wzk_FMtKwKZxWwQS6tCpIXxiE-W9WTGNzqeO9TgaIEBjpS8aNcurVmwYRGlmTJTU8k0JuBfr4weojFobE-eFQ8HBAws7RRrGSBwVGhCO10LyjYTULzRs4"
        ],
        "Place Id": "0x2e7a574135fe1069:0x38ddc01ac0a38eec",
        "Top 5 Reviews": [
            {
                "name": "Ragil Intan Novitasari",
                "review": "Makanan yang wajib dicoba kalo' jalan-jalan ke jogja  Resto yang direkomendasikan sama temen \u2026"
            },
            {
                "name": "Fitri P",
                "review": "Tempatnya nyaman, tersedia banyak area makan walopun kondisi pengunjung rame. Ada lesehan juga, enak buat family. Service nya cepet. Mushola and toilet bersih. Harga sesuai lah buat daerah wisata."
            },
            {
                "name": "Mahmudah Eka Ariyanti",
                "review": "Makanan yg wajib dicoba ketika ke Jogja. Tipe gudegnya kering, manis tapi masih bisa ditelan (meskipun bukan pecinta makanan manis), kreceknya sedikit pedas, jadi makannya sambil dicampur dengan gudeg. Ayam dan telornya enak. Tempat makan luas, kamar mandi dan musholla proper."
            }
        ],
        "description": "A highly recommended, family-friendly establishment famous for its dry, sweet-style gudeg and spicy krecek. It offers a comfortable, spacious dining area with quick service and excellent facilities including a clean prayer room and restrooms."
    },
    {
        "Name": "Empal Bu Warno",
        "Fulladdress": "Jl. Pabringan No.41, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122",
        "Street": "Jl. Pabringan No.41",
        "Categories": "Restoran Jawa",
        "Phone": "0851-0013-3267",
        "Review Count": null,
        "Average Rating": "4,3",
        "Google Maps URL": "https://www.google.com/maps/place/Empal+Bu+Warno/data=!4m7!3m6!1s0x2e7a578864ee6b0d:0x3f79216af8cdcfa0!8m2!3d-7.7991594!4d110.3681293!16s%2Fg%2F1hc1jdmd9!19sChIJDWvuZIhXei4RoM_N-GoheT8?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7991594,
        "Longitude": 110.3681293,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweovMSN6Mpss9nTOipRAKZWOB67RO5a120M6eI5OOijfnivdgq2qwbeIRFyGxYR5tqbmPONo2TnrxFgwcID0JS_y_MxtvXKT_9m1qlWVawkG2L01_SRzYLpjLUan3T0RMSHWyq77",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerwZUBDsBqcsN0Mex4qOKSiFWGTjHhDnrmMGI8SUFcFlshRftlcqPXUJAhclM9Sjn5hXqchkVPYLZ4gUPyuzXz775UykR8h7ShuI5Alx4oERMg_AA47eT_g4H0iCkjBc74p94dg",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqM_356jHk9GZMzbqNjqWgWDRb7xYw974ZBmJ98t2-CKi5zuus_vGV4MuK7c1ekzo9o_PokBzZH1WpmiUo039SQLxP2rsNIm8wExHO56Dlh7HU8p2vu2zUBiEH8kasPMrS7pmqn"
        ],
        "Place Id": "0x2e7a578864ee6b0d:0x3f79216af8cdcfa0",
        "Top 5 Reviews": [
            {
                "name": "Dian Juliana",
                "review": "makan nasi, empal daging dan es teh tawar totalnya 31rb. buat aku empalnya ini enak, tapi bukan yang enak banget. empalnya berasa bumbunya, dimasak dengan baik jadi gak keras/alot. bisa disuwir enak. sambelnya kaya \u2026"
            },
            {
                "name": "Joko Fathur \u201cJoeheadshot\u201d Rahman",
                "review": "Letaknya diarea pasar beringharjo. Masuk ke lantai 2 yaa, soale sy kesini sempet nyari2 juga dan jangan lupa bertanya pada penjual sekitar nanti langsung diarahkan kok. \u2026"
            },
            {
                "name": "Sandiirc",
                "review": "Sego Empal Bu Warno Berlokasi di Lantai 2 Pasar Behingharjo di tempat kuliner.Pelayanan disini lumayan cepat.Untuk Sego Liadh rasanya lumayan enak,ditambah sambal lebih mantap dan Es Teh okelah."
            }
        ],
        "description": "Located on the second floor of Pasar Beringharjo, this humble eatery serves flavorful, tender empal that easily shreds. It offers quick service and satisfying, affordable meals, especially when paired with their signature sambal."
    },
    {
        "Name": "Yam Yam Restaurant Yogyakarta",
        "Fulladdress": "Jl. Prawirotaman No.39, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55153",
        "Street": "Jl. Prawirotaman No.39",
        "Categories": "Restoran Thailand",
        "Phone": "0823-2496-0379",
        "Review Count": null,
        "Average Rating": "4,8",
        "Google Maps URL": "https://www.google.com/maps/place/Yam+Yam+Restaurant+Yogyakarta/data=!4m7!3m6!1s0x2e7a57420708f293:0xa4112c4261600375!8m2!3d-7.8192571!4d110.3723121!16s%2Fg%2F11w9j_w8gz!19sChIJk_IIB0JXei4RdQNgYUIsEaQ?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8192571,
        "Longitude": 110.3723121,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo2lcvOqfpGt38PFyRsMsE7CvkTfKi1qDZORE9Lvcurb6t2FiZ2CqstmAZryUvP6UVeNFFtEHglLnecL0R2_iI60ldOvcpG9FhCOOSUuxxvphmuLH6UpITxVU706LGT6eMOwB-4KCDTJ1WL",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerTwXXvfpn9mCRym24zrf11FwVFqj5CP0Q5hCGM3zWSlvQ-cD_fmTYdkSE5Qs47azsm6bp7SBK9BAt8iQsYNiy_WfvKzK0IK-eX1HdZJ7JvhwRxfZRhIQH09kg4FZbbLCr52pUH",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepTM-KjJg6PYc12kjHyWzEyIKf_CXvcHBNDeM2AV-9VKTLbIu0a67IeW_jbWBlTaJwGES51_74D07vj6Dij-NZt5AmgT7HxTd2rendy2y2rKyxzykCCcl4-IskWxe6wCsREXHwt"
        ],
        "Place Id": "0x2e7a57420708f293:0xa4112c4261600375",
        "Top 5 Reviews": [],
        "description": "A Thai restaurant located in the vibrant Prawirotaman area, though specific customer reviews are currently unavailable to summarize."
    },
    {
        "Name": "Warung Makan Texas 1978 (Djadul Bu Arjo)",
        "Fulladdress": "69GR+896, Jl. STM Pembangunan, Santren, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        "Street": "69GR+896",
        "Categories": "Restoran Keluarga",
        "Phone": "0878-3929-4437",
        "Review Count": null,
        "Average Rating": "4,8",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+Makan+Texas+1978+%28Djadul+Bu+Arjo%29/data=!4m7!3m6!1s0x2e7a59ce4e10c91b:0x4b6c23a5737b9b15!8m2!3d-7.7742042!4d110.3908861!16s%2Fg%2F11t3xtnwm2!19sChIJG8kQTs5Zei4RFZt7c6UjbEs?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7742042,
        "Longitude": 110.3908861,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoH1Xz4Wwpzqss7cRQwzYtV30sVNAoo0dsJnvR8-Tyj3tM1JtoB79UlJmb2hZ5nBb24FQWqZ79zqOn80kz5EzGvVxYGRzWDeXwe5SiEUHr9WUEyTS2IBXedo5XeFiIWU80J7nEi-AtIR_bt",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjXbfcPkbJXyLKjRLF8_Ol82NmuYR6yeAO6cTqpPLtFZU7FQ8qFn7g",
            "https://lh3.googleusercontent.com/a-/ALV-UjX5XJhuvnnM-6iwGPJgymn5CCyhK7pPrXuye39vN9CR1ZevM4v6"
        ],
        "Place Id": "0x2e7a59ce4e10c91b:0x4b6c23a5737b9b15",
        "Top 5 Reviews": [
            {
                "name": "wedhoez",
                "review": "Mampir ke warung legendaris Texas  1. Akses terbatas untuk mobil. Mobil harus diparkir kemudian baru jalan ke arah \u2026"
            },
            {
                "name": "Hubertus Gilang OJI",
                "review": "Salah satu warteg legend di Jogja di akhir dekade 1970an dengan berbagai menu lauk pauk dan sayur secara prasmanan dengan harga murah di kalangan mahasiswa sekitar. \u2026"
            },
            {
                "name": "Darien",
                "review": "Disini tempat makan sejak masih kuliah. Ruang makan semakin luas. Menu semakin lengkap. \u2026"
            }
        ],
        "description": "A legendary, affordable buffet-style eatery established in the late 1970s, beloved by generations of students. The venue has expanded over the years to offer a wide, nostalgic menu, though car parking requires a short walk."
    },
    {
        "Name": "Rumah Makan Suka-Suka",
        "Fulladdress": "Jl. Kaliurang Kecamatan No.KM 5.5, Karang Wuni, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        "Street": "Jl. Kaliurang Kecamatan No.KM 5.5",
        "Categories": "Restoran Indonesia",
        "Phone": "0851-0058-2155",
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Rumah+Makan+Suka-Suka/data=!4m7!3m6!1s0x2e7a59ac91de43c9:0x90b7885cea65a499!8m2!3d-7.7594813!4d110.3810602!16s%2Fg%2F1pzsj7v7k!19sChIJyUPekaxZei4RmaRl6lyIt5A?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7594813,
        "Longitude": 110.3810602,
        "Website": "https://instagram.com/sukasukajogja?igshid=1s7bkmwryx7lo",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqp7U2k_4mUjDiSpzlBdJ0Lmkw4-o6NlxYwQo9vRJCfXhrx5P6fvp85JKLDhsC94N9Bkmk2YCyoKy-wbcW_aEXxUF32O6mvby4ee1gNQDqYh7bAXh_xNOR5b6TpChRLfg_DVNitow",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjWh81wg7h-UgbinZA9PzcGIcmBkSuY5j50HH_dQ4oLDHU0UNxn7yQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepz39IP9-jCCbzaeGPTApno4vhjg1-yBhPIUvPDTTbN3x1bh8wYwaYB4RMxKvhDuBTAej4JDwbG_GtNRhSHVZ8_u5BGFyPFUfUpwsoiK4sRrBHzYMqOOSUlgjwbe1O9DOS8JIP35fKDUJEB"
        ],
        "Place Id": "0x2e7a59ac91de43c9:0x90b7885cea65a499",
        "Top 5 Reviews": [
            {
                "name": "Vivian Lucia",
                "review": "Tipikal restoran keluarga after church\ud83d\ude05 sebenernya lumayan enaakk! Porsinya banyak, dan tergolong lumayan murah\u2026 tp bumbu di ayamnya kurang terasa (agak kurang nyerep), sm tempenya harus bilang kalo gak mau digoreng tepung.. \u2026"
            },
            {
                "name": "Krishna Handoyo",
                "review": "Puas banget sih makan di sini. Sedia aneka ikan dan ayam yang digoreng dan dibakar. Favorit banget cakalang bakarnya. Ukurannya gede, harganya kayak niat bersosial. \u2026"
            },
            {
                "name": "Yuda W Putra",
                "review": "Yang kuliah di UGM apa nge kos sekitaran jakal  mungkin kenal sama tempat makan ini. Suka suka, suka sama ayam bakar dan lele gorengnya. Makan disini mengenang jaman jaman dulu. Sayang jam setengah 8 sdh close order. Padahal jam nya orang makan malam \ud83d\ude01 \u2026"
            }
        ],
        "description": "A nostalgic and budget-friendly restaurant favored for its large portions and excellent grilled fish, particularly the cakalang. While highly praised for its value, some guests note the chicken seasoning could be deeper and advise arriving early as it closes by 7:30 PM."
    },
    {
        "Name": "Ayam Goreng Bu Tini",
        "Fulladdress": "Jl. Sultan Agung No.17, Gunungketur, Pakualaman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55112",
        "Street": "Jl. Sultan Agung No.17",
        "Categories": "Restoran Masakan Ayam",
        "Phone": "(0274) 543670",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Ayam+Goreng+Bu+Tini/data=!4m7!3m6!1s0x2e7a5783e5f59c97:0x73328b2b0676fbeb!8m2!3d-7.8013638!4d110.3736465!16s%2Fg%2F1hc7wtdnj!19sChIJl5z15YNXei4R6_t2BiuLMnM?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8013638,
        "Longitude": 110.3736465,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerNIsn9xToDrcDILKVRmp9jsvW2kghHoJ_PWI3ci7ZQbxTC-XeVm0k6uMjniDo6dcK0B0K9GfS-EWxbrdEDqS3AD-if_IfQHedmJqMZEdAETpjst4iHrrrZNdskoYZ1mDGmJOwOs3k7GgFP",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjXIpzwr-K3F3wUaVykQ05e02oIONUqTshSEFzHcchCfRmz1p_Fs",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer4tMdsGUHNg8eKHfZqBkJAgJgxeyDnYl_tV6N6p70LR0WwS7LpmTstYOL--EalM1bK8tN5uEScKrXFWpFQPelsbJYspwrFgOvw5cI4AbL9e9nq-NYWp92UTKnCxd4r8Wy5gNcqSwEXQ-Y"
        ],
        "Place Id": "0x2e7a5783e5f59c97:0x73328b2b0676fbeb",
        "Top 5 Reviews": [
            {
                "name": "reeva damayanti",
                "review": "Dari jalan sudah kelihatan rame sekali, pas masuk juga ternyata tempat makannya luas. Antriannya panjang. Jadi menunggu agak lama. Ini saya pesan yang setengah ekor, ayamnya empuk, dan sedikit manis. Lalapannya fresh. Sambelnya menurutku kurang pedis. Tapi semua tergantung selera ya"
            },
            {
                "name": "Iwa Dwi",
                "review": "Salah satu rumah makan yg wajib didatengin kalo ke Jogja!! Ayam gurihnya enak bgt!!! Sambal bawang nya pun enak pedes bgt, kalo sambel terasinya aku kurang suka karna ada hint manisnya menurutku. \u2026"
            },
            {
                "name": "TNW",
                "review": "Dari depan kelihatan tidak tetlalu luas, tapi begitu masuk luas katen memanjang ke belakang. Ayam gorengnya enak asin manis, lebih kaya rasa dari ayam goreng lainnya yang terkenal di Jogja dan banyak cabangnya. Saya juga makan gorengan hati \u2026"
            }
        ],
        "description": "A famously busy restaurant offering tender, sweet-and-salty fried chicken with a rich flavor profile. The spacious venue frequently draws long queues, and diners highly recommend pairing the chicken with their spicy onion sambal."
    },
    {
        "Name": "ViaVia Jogja",
        "Fulladdress": "Jl. Prawirotaman No.30, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55153",
        "Street": "Jl. Prawirotaman No.30",
        "Categories": "Restoran Makanan Sehat",
        "Phone": "(0274) 386557",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/ViaVia+Jogja/data=!4m7!3m6!1s0x2e7a57a3c92ac2df:0x10a4e81eaf2ed9f8!8m2!3d-7.819314!4d110.3714557!16s%2Fg%2F11_qrdmg7!19sChIJ38IqyaNXei4R-Nkurx7opBA?authuser=0&hl=id&rclk=1",
        "Latitude": -7.819314,
        "Longitude": 110.3714557,
        "Website": "http://www.viaviajogja.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqz1ynSMSkbokmFfqqL9Hs3MuNFSpGU5ctcun8v5tBd3VzNcQN1AI_qRmmn3zFjrIQhpPQelXiWXRkFYKEk5h_L-oXPhECkAet31tYi1tUZD5QGliTJm1nGWa-WZm7kdoNsbWnJafufFnkc",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjWlhm7bdKlffeTLLMOZuRjKj7PNtEjYbJujAaU80fnYjMlf6Q",
            "https://lh3.googleusercontent.com/a-/ALV-UjW7qR1N0fet4L0UkO0oY5Na6tm2J9ghmNKlJHErGheNkfIDtKR0RA"
        ],
        "Place Id": "0x2e7a57a3c92ac2df:0x10a4e81eaf2ed9f8",
        "Top 5 Reviews": [
            {
                "name": "Christina Rika",
                "review": "untuk saladnya enak, sayuran fresh, porsinya lumayan banyak. tempatnya mungkin agak berdeketan ya duduknya kalau di lantai bawah, sering ngadain pameran seniii jadi tempatnya ok bgttt aesthetic, kadang ada performance juga, kadang juga ada acara seruuu\ud83d\udc4d\ud83c\udffc tempat parkirnya agak terbatas \u2026"
            },
            {
                "name": "sakura",
                "review": "ini salah satu toko pernak pernik yang wajib didatengin juga di sepanjang jalan prawirotaman ! barang yang dijual unik n masi kondisi bagus semua, harganya masi ada yang affordable juga, staff nya juga ramah\ud83d\ude46\ud83c\udffb \u2026"
            },
            {
                "name": "Rosihan Fahmi",
                "review": "Jika ingin duduk menikmati kawasan Prawirotaman dan merasakan roti serta minuman di Viavia artisan bakery bisa ke sini saja. Karena di Viavia artisan bakery tidak menyediakan dine in, tapi disini bisa untuk dine in dengan live music dimalam hari. Asik vibes nya dan pelayanan juga ramah."
            }
        ],
        "description": "An aesthetic and vibrant spot known for its fresh, generous salads and lively atmosphere featuring art exhibitions and live music. It also houses a shop with unique, affordable items, making it a great place to dine and relax in the Prawirotaman area."
    },
    {
        "Name": "Gudeg Bu is asli Wijilan",
        "Fulladdress": "Jl. Wijilan No.7, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131",
        "Street": "Jl. Wijilan No.7",
        "Categories": "Restoran Jawa",
        "Phone": "0877-3892-0614",
        "Review Count": null,
        "Average Rating": "4,7",
        "Google Maps URL": "https://www.google.com/maps/place/Gudeg+Bu+is+asli+Wijilan/data=!4m7!3m6!1s0x2e7a57733fa6f4d3:0x5ac63d78ae04b60b!8m2!3d-7.8043931!4d110.3666903!16s%2Fg%2F11sv8vm5q7!19sChIJ0_SmP3NXei4RC7YErng9xlo?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8043931,
        "Longitude": 110.3666903,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepeznoTOcl94yUgfDrRwiBYQNvmnqDK-2Vtni4WZZ6qOwb-Ty4qBsbJeuwO7rAjZvSaPYWAwYO9qjqqq7x_Q_VtwQ6g1uDyZPCxUkuHrhKKl_e3XIsSxreea0EWOT4CQQh5It2GT2Zoeied",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJVcg5JgmTPsaQcG5Wzk_FMtKwKZxWwQS6tCpIXxiE-W9WTGNzqeO9TgaIEBjpS8aNcurVmwYRGlmTJTU8k0JuBfr4weojFobE-eFQ8HBAws7RRrGSBwVGhCO10LyjYTULzRs4",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep0gjX2ufrinkSYSE3tQbMrE9wKKasZzBv0yBvC_wm2kU4Fqpos8ShA_gyYakBghFwv6HwosCa3pvN1cqGugU6cZPyaIqe4ZkvQxKo-4N4NwKpbDL_NnjPShQmBwDjlb_HfQL_NGi9Kks4"
        ],
        "Place Id": "0x2e7a57733fa6f4d3:0x5ac63d78ae04b60b",
        "Top 5 Reviews": [
            {
                "name": "Andreas Pasolympia",
                "review": "Ini adalah salah satu warung gudeg favorit saya. Rasanya benar benar pas dan seimbang. Perpaduan asin dan manisnya tepat sekali, tidak berlebihan ke salah satu sisi. Setiap suapan terasa matang, tenang, dan memuaskan. Gudegnya dibuat dengan \u2026"
            },
            {
                "name": "Dhenny Adriana",
                "review": "Dibanding tempat makan yg lain sepanjang wijilan, mungkin ini yang menurut saya paling nyaman, untuk makanannya pas di mulut saya, dibanding gudeg lainnya yg manis banget. Ini tidak terlalu manis, mas mas nya juga sangat membantu, apabila \u2026"
            },
            {
                "name": "Christian Jason",
                "review": "Gudegnya wenak, bisa dibilang salah satu gudeg terenak di Jogja, ceceknya kenyel banget, wangi juga baunya. Belinya lewat online, enaknya makanan dan nasinya dipisah jadi pas nyampe masih kelihatan fresh"
            }
        ],
        "description": "Highly praised as one of the best gudeg spots in Jogja, offering a perfectly balanced, not-too-sweet flavor profile. Diners appreciate the comfortable setting, helpful staff, and excellent krecek (cecek) that maintains its freshness even for takeaway."
    },
    {
        "Name": "Warung Makan Cak Koting",
        "Fulladdress": "Jl. Doktor Sutomo No.57, Bausasran, Kec. Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55211",
        "Street": "Jl. Doktor Sutomo No.57",
        "Categories": "Restoran Jawa",
        "Phone": "0856-4757-2009",
        "Review Count": null,
        "Average Rating": "4,3",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+Makan+Cak+Koting/data=!4m7!3m6!1s0x2e7a582b3be3c5a1:0xb741aae180d98fda!8m2!3d-7.7920498!4d110.3776769!16s%2Fg%2F11h03r1qb!19sChIJocXjOytYei4R2o_ZgOGqQbc?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7920498,
        "Longitude": 110.3776769,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwequNHfdDqBLDJIWYbS86TwgqoAWpxZ2OrNNc-g1h-ztR8gzaZbRn4UIpbE2pBUIdhO0wSYeeq4Y9tLB4uKbDKvExiECZRiqqKHK-Mp8qyFIw7VeBw3nbP4L9Hza8gA892XTYJqQ",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjUr7pS7iSx-WBrBcy7ZCqN5IIiFvIopFdNiBbaejlDHZgHCyWI",
            "https://lh3.googleusercontent.com/a-/ALV-UjX3RZUgHDCLOJqzK5MIr0c9EAF9F2wkajblDKnghiGBC4A75y96"
        ],
        "Place Id": "0x2e7a582b3be3c5a1:0xb741aae180d98fda",
        "Top 5 Reviews": [
            {
                "name": "Hastea",
                "review": "Bebek gorengnya ukuran cukup, digoreng garing, bagian daging empuk gurih, tapi kulitnya masih lumayan alot. Kremesnya enak. Disajikan dengan urap & sambel. \u2026"
            },
            {
                "name": "Nita Andromas",
                "review": "baca review sebelumnya yg kasih bintang 1 gegara tukang parkir itu tidak adil, karena tukang parkir bukan bagian dari resto. sementara dia menikmati makanannya. kok digebyah uyah? \u2026"
            },
            {
                "name": "Alya Nurfita Anggaresta",
                "review": "pertama kali kesini untuk makan siang.. overall enak semua makanannya.. ayam bakarnya bumbunya meresap sampe ke tulang\ud83d\ude02 dan dagingnya empukk, anakku yg gk suka ayam kampung aja sampe doyan.. menurutku harganya standar lah buat warung makan \u2026"
            }
        ],
        "description": "A legendary local eatery known for its flavorful roasted chicken with fall-off-the-bone tenderness and crispy fried duck. While the food is generally considered delicious and reasonably priced, some diners mention the duck skin can be tough and note external parking issues."
    },
    {
        "Name": "Warung Makan Gudeg Yu Tum",
        "Fulladdress": "59W7+P6X, Jl. Alun-Alun Utara, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122",
        "Street": "59W7+P6X",
        "Categories": "Restoran Jawa",
        "Phone": "0813-2873-5544",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+Makan+Gudeg+Yu+Tum/data=!4m7!3m6!1s0x2e7a578ee3614911:0x78f8005fe975e504!8m2!3d-7.803141!4d110.363117!16s%2Fg%2F11c56b7v7l!19sChIJEUlh445Xei4RBOV16V8A-Hg?authuser=0&hl=id&rclk=1",
        "Latitude": -7.803141,
        "Longitude": 110.363117,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwept6p4kRTnI6RGc7OYnwDiLkjbZNXF_1AIWqwzQ9GmgQpOf648BEk0dfucMM1OUYzefGhV6faUKGEJtW_9hL1QVCQp8WxCFZdGywyodeUy1Pfr4ydfghcVs0tLWbfI4wbdzr8o6",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJVcg5JgmTPsaQcG5Wzk_FMtKwKZxWwQS6tCpIXxiE-W9WTGNzqeO9TgaIEBjpS8aNcurVmwYRGlmTJTU8k0JuBfr4weojFobE-eFQ8HBAws7RRrGSBwVGhCO10LyjYTULzRs4",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAwerM9_e35EbsUSzL-bc--rrWSqEiRD0PGTrOr770RLH4m87sLi4SzzpS2sqZCmJsQ-h4WYz4xOTMk9MpLnB8xSBbQ-EZ07-O0siXeyz6WXcnoKhyCIB_M0CRD3-2g410cKHswfoMumEnu2mu"
        ],
        "Place Id": "0x2e7a578ee3614911:0x78f8005fe975e504",
        "Top 5 Reviews": [
            {
                "name": "Zhey Zet (Zhey)",
                "review": "Makanannya saya kira tidak terlalu enak, mungkin karena harganya cukup murah. Dengan lokasi bagus seperti itu sya kira kalo harganya dimahalin sedikit untuk di lebih bagusin masakan dan layanan nya, itu akan sangat bagus sekali."
            },
            {
                "name": "Nida",
                "review": "Lokasi mudah terlihat dari pinggir jalan, cita rasa enak, pelayanan lumayan dan harga murah. Rekomended gudegnya."
            },
            {
                "name": "Yunny Trisanti",
                "review": "Sukaaa banget gudeg nya. Nasinya panasss nambah kenikmatan"
            }
        ],
        "description": "A strategically located, budget-friendly gudeg stall offering warm, comforting meals. While many appreciate the tasty food and great value, some reviewers feel the culinary quality and service could be improved to match the prime location."
    },
    {
        "Name": "Gubug Watu Kali",
        "Fulladdress": "JL RAYA ASIA, Karanglo, Sukoharjo, Yapah, Sleman Regency, Special Region of Yogyakarta 55581",
        "Street": "JL RAYA ASIA",
        "Categories": "Restoran",
        "Phone": "0838-2026-2323",
        "Review Count": null,
        "Average Rating": "4,7",
        "Google Maps URL": "https://www.google.com/maps/place/Gubug+Watu+Kali/data=!4m7!3m6!1s0x2e7a5df5ddb56ab5:0x3eb0c59d37396379!8m2!3d-7.7059714!4d110.4394429!16s%2Fg%2F11np7s3mhw!19sChIJtWq13fVdei4ReWM5N53FsD4?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7059714,
        "Longitude": 110.4394429,
        "Website": "https://www.instagram.com/gubugwatukali/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerAg7t5SUKMP2vG4Pkf3RqxiSu_u1jaFRTcJqtWEveSWHCCtOH4-LwmOeJTw4pUYMOpBH-8goDa5lFKGT3ohxLnB6c7LI0KUqbtTp7APkW_ZnBcpLSVuuAGauXlvUUUNkY3Kw7wOenIAiHn",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjUifyv5pkag-U9poLgBD6FrJvoNRFllYpp5IfYirvk7hkoc22X4",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAweoYIZduy6VCtKkbx57_CuTnJu5EWnu3_TkEco0K5m91O7einuWrmoqnOUydKdGyVH7i3p-N-izJussU-lU9QbqBdcpDPA7HiP5L6M29jNe66WFovHsOyzfFBvfEqosZzV3pAsP8"
        ],
        "Place Id": "0x2e7a5df5ddb56ab5:0x3eb0c59d37396379",
        "Top 5 Reviews": [
            {
                "name": "Sulis Tyowati",
                "review": "Pesanan kami semuanya enak, sop iga tdk terfotokan selak laper. Satenya enak, mendoan enak, pepes lmyn enak, singkong agak gosong. Suasananya adem, sejuk. Pelayanannya maksimal, ramah2"
            },
            {
                "name": "Mayang Ayu Jatiningrum",
                "review": "Udah 2x ke sini, hehe.. Untuk kategori tempat makan dekat lokasi tujuan wisata, worth it lah.. Masakannya enak, snack2nya enak, minumannya juga enak2.. \u2026"
            },
            {
                "name": "Pujangga Atmaja",
                "review": "Cocok untuk keluarga dan acara besar \ud83d\udc4d Makanan enak  dan suasana  asri silir adem \u2618\ufe0f syahdu untuk jadi pilihan makan keluarga \u2026"
            }
        ],
        "description": "A serene and highly recommended destination for family gatherings or large events, offering a cool, natural ambiance. Guests consistently praise the friendly service and delicious local dishes, including sop iga, satay, and mendoan."
    },
    {
        "Name": "Kedai Lur",
        "Fulladdress": "Jl. Gowongan Kidul No.29 A, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
        "Street": "Jl. Gowongan Kidul No.29 A",
        "Categories": "Restoran Indonesia",
        "Phone": "0858-7850-6000",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Kedai+Lur/data=!4m7!3m6!1s0x2e7a582512ebc5db:0x24095265b489433a!8m2!3d-7.7875666!4d110.364955!16s%2Fg%2F11fx82xqby!19sChIJ28XrEiVYei4ROkOJtGVSCSQ?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7875666,
        "Longitude": 110.364955,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoC7HY7gniaEivDFTcZMaPzqbp6ij5YpjKqJxcgZJtj9cfGIae4BoBhaNa2nndP2kRrAZ365BUbBUBi8HXwu5pRCTQJguCup-MW_FNyCbwsu4Frb7mtFx_ve8OwW8PCgxMizGFiow",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepoztsD2Y2aFXEBTIlriTe8CoKuqgUHjgkl6crvNYoUGLc0qmcQsgmmghlm73e2MXv4XUvbUCmKkxCz_SQH3HTEq_7l-iRPHfUPUUS1w92TMp-srSXRaNsff--0sqV3W3et89fnqQ",
            "https://lh3.googleusercontent.com/a-/ALV-UjVJFbrR-Xt8gFsVoe7qIKDq086KgFdsZLO6qh3l5e90CM-3BTc"
        ],
        "Place Id": "0x2e7a582512ebc5db:0x24095265b489433a",
        "Top 5 Reviews": [
            {
                "name": "Shinto Laras",
                "review": "Favorit aku banget tiap kali makan disini.. Ayam Goreng Godhong Telo.. unik banget kan, tp rasanya uenak pol.. ayamnya ayam kampung, empuk gak alot sama sekali, rasa ayamnya meresap bgt smp ke tulangnya, sambelnya enak bgt. Selain itu masih \u2026"
            },
            {
                "name": "Bang Yoe",
                "review": "Iseng2 cari tempat makan terdekat dari hotel dan akhirnya pilihan jatuh ke \"Kedai Lur\". Ayam Gorengnya unik dibungkus pake daun dan rasanya asin gurih cocok dah pokoknya sama lidah Kalimantan saya dan Sambelnya juga enak saya sampe nambah \u2026"
            },
            {
                "name": "Maulinna Utaminingsih",
                "review": "Menu makannya menarik semua, sayangnya udah pada habis. Next harus revisit. Tempatnya juga enak buat nongkrong bareng2. Pemiliknya juga baik. Semua juga disajikan tanpa plastik sekali pakai jadi ramah lingkungan."
            }
        ],
        "description": "A unique and eco-friendly dining spot famous for its tender, savory \"Ayam Goreng Godhong Telo\" wrapped in leaves. Praised for its deeply infused flavors, excellent sambal, and great hangout atmosphere, it also stands out for avoiding single-use plastics."
    },
    {
        "Name": "Boyong Resto/Boyong Kalegan",
        "Fulladdress": "Jl. Pakem - Turi Jl. Kalireso No.Km. 3, Kumendung, Candibinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55582",
        "Street": "Jl. Pakem - Turi Jl. Kalireso No.Km. 3",
        "Categories": "Restoran Ikan Bakar",
        "Phone": "0812-2987-132",
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Boyong+Resto%2FBoyong+Kalegan/data=!4m7!3m6!1s0x2e7a5fc82ce3c80f:0x21f33c1313823855!8m2!3d-7.6594086!4d110.3970284!16s%2Fg%2F1jkxbcwrm!19sChIJD8jjLMhfei4RVTiCExM88yE?authuser=0&hl=id&rclk=1",
        "Latitude": -7.6594086,
        "Longitude": 110.3970284,
        "Website": "https://boyongresto.blogspot.com/p/blog-page_7.html",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerdcE_n9beQHHl8SfFmoyQOs517SVy128sbTmhIiKsVNlgWyG4nlU2obAWLhQRlggHJMkAB5lRK6GxT5ok0Mm7BVgElb9_A1v-0OpIzQd2bj7ieam_voPf65gHapPPC-bNhUWuejhjW1_0b",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer7d_vyNtPgXkrBwrdMCD1MRdKqiJD-aXXDfNrpLPWF7QZceegqPvdpc1V4pXdEuU8YWVK2PYcFqAC1DSDnSyiGuxEOxyqOlnxaTKtl8Wqhiuh-94TOvSlZmArm6d8BjYzaRhunJH-OKC0C",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer1c-u40Evl1Pai-Dref8Pn5sZvE68auK1OPQufbWqVPfCGYkPNocVyk3f50Lb73Il2jxDz6hIY2cDphlKgyG-6i__K04RSfS5YOaNsT244FaCMpgwYM_ARK9TDKPWFqtnB7umWbQ"
        ],
        "Place Id": "0x2e7a5fc82ce3c80f:0x21f33c1313823855",
        "Top 5 Reviews": [
            {
                "name": "Anurdynesia bikes",
                "review": "Menu makanannya lokal pride. Enak banget. Bumbunya krasa banget. Pelayanan sangat ramah khas wong jowo. Suasananya syahduuu. Kolam ikannya luas bikin ademm. Cocok buat ngajak keluarga.."
            },
            {
                "name": "Puri Hena",
                "review": "Untuk makan dan kumpul keluarga, tempatnya nyaman dan ada pendopo diatas kolam,, bisa lesehan juga bisa duduk biasa. Ada live music nya, jd buat yg suka nyanyi, puas dech nyanyi nya.. Wkwkw"
            },
            {
                "name": "update news",
                "review": "Pengalaman buka puasa di resto ini di ramadhan 2026 ini, sangat luar biasa... Suasana alaminya menyentuh jiwa,parkiran luass,di dalam resto pilihan gasebo nga..banyak,ada live musik, makanan nya juga enak, penyajian menu2 nya bagus , resto yang rekomended"
            }
        ],
        "description": "A fantastic family-friendly restaurant offering a relaxing, natural atmosphere with spacious fish ponds and gazebos. Known for its rich, flavorful local dishes and excellent service, it also provides live music for an entertaining dining experience."
    },
    {
        "Name": "Soto Mie Asli Bogor Pak Kadir - Pakualaman \ua9b1\ua9ba\ua9b4\ua9a0\ua9ba\ua9b4\ua9a9\ua9b6\ua984\ua9b1\ua9c0\ua9ad\ua9b6\ua9a7\ua9ba\ua9b4\ua992\ua9ba\ua9b4\ua982",
        "Fulladdress": "depan Halte Busway Musium Biologi UGM, Jl. Sultan Agung No.27, Gunungketur, Pakualaman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55200",
        "Street": "depan Halte Busway Musium Biologi UGM",
        "Categories": "Restoran Indonesia",
        "Phone": "0813-2070-5070",
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Soto+Mie+Asli+Bogor+Pak+Kadir+-+Pakualaman+%EA%A6%B1%EA%A6%BA%EA%A6%B4%EA%A6%A0%EA%A6%BA%EA%A6%B4%EA%A6%A9%EA%A6%B6%EA%A6%84%EA%A6%B1%EA%A7%80%EA%A6%AD%EA%A6%B6%EA%A6%A7%EA%A6%BA%EA%A6%B4%EA%A6%92%EA%A6%BA%EA%A6%B4%EA%A6%82/data=!4m7!3m6!1s0x2e7a57456b165c4b:0xc4e601135db174cf!8m2!3d-7.8015783!4d110.374168!16s%2Fg%2F11rxyfc68q!19sChIJS1wWa0VXei4Rz3SxXRMB5sQ?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8015783,
        "Longitude": 110.374168,
        "Website": "https://taplink.cc/sotomiepakkadir",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqwbtKrHGuFQLB_2JPJWKciGFMRkg5CDfmSnZCSqz6q9qLUrsfWwp5NHjtlG-7N5EccjawLPihjGWmXhyC7ELo1UtBhLAa7m5r1uZJvqvxCbj-9lBwFj4ERFzKbj9oFL9l8ZjTh",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepjw7u4wSv7c-cBySCOc8I1BNDcCYgC-kfyRnI59GoJKq_JGYaQmMyvWSa6H1vbMFkjsmnD6-bE97M3GVkEGcrBmRep2VCzpGSFTOEEYynrF1d4cFuJPyla1uIY_h5rxqIWUHJppyrHTOgk",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJhE30xQU8RH4U8N6xxS4s26EfZhuPhsLAsXJJI8YpDRcFH0nXJSKEVhEa8sXpCP93vEzuEkpzluXCsYoPm00eqwDiv7YdX5WS2jYvD1_a4GlyWckIn-WsPGZqqg7dX7y91d1P"
        ],
        "Place Id": "0x2e7a57456b165c4b:0xc4e601135db174cf",
        "Top 5 Reviews": [
            {
                "name": "Rofiquzzaki Solo",
                "review": "ke sini pas grebeg mulud karena sambil nunggu gajah lewat. parkiran motor ya di trotoar pinggir jalan, kalo mobil paling ya pinggir jalan. sotomie nya enak, kalo anda tidak makan daging bisa pesen risol kuah isinya hampir sama dikurangi daging dan beberapa isinya."
            },
            {
                "name": "Nova Pramono Putro",
                "review": "Rasanya special mantep si no debat. Tentu ada harga, pasti ada rasa.. jangan ragu datang dan larisi kesini.. Alhamdulillah saya sama istri pertama nyicip nih soto, wehhh masyaallah, enak, gurih pas, sedap pojok, dagingnya empuk kenyal, \u2026"
            },
            {
                "name": "Firdaus Tejo Rahardani",
                "review": "Soto mie bogor di daerah Sayidan. Rasanya masih enak tetapi kurang sedikit gurih. Tipe kuahnya butek. Risolnya enak dan dagingnya banyak"
            }
        ],
        "description": "A beloved spot for authentic Bogor-style Soto Mie in Jogja, featuring tender meat and generous portions of risoles in a savory, cloudy broth. While highly praised for its flavor, parking can be tight, especially during local events."
    },
    {
        "Name": "Warung Makan Mahasiswa Ambarrukmo",
        "Fulladdress": "Jl. Ambar Asri No.311, Ambarukmo, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        "Street": "Jl. Ambar Asri No.311",
        "Categories": "Restoran Jawa",
        "Phone": "(0274) 484228",
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Warung+Makan+Mahasiswa+Ambarrukmo/data=!4m7!3m6!1s0x2e7a59c2d7a2d0cd:0x5823ba5aec88d3d4!8m2!3d-7.783653!4d110.3997774!16s%2Fg%2F1pzr_k76j!19sChIJzdCi18JZei4R1NOI7Fq6I1g?authuser=0&hl=id&rclk=1",
        "Latitude": -7.783653,
        "Longitude": 110.3997774,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerQHNGjr4RMYAqMqmRfvnukIZZKjHPMAONeTv5fFkYeF2B2UJkQpKclVAsNX6iLU27u7enScKrtJpITojWZk9970Bnlt4Sojw9nAq06Avu8tKd9hPFkZ1JAsJ3zOW2IGWpV4ZWY",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqKopJwd_79mZx_RcHDCBDVRmDZ0oP3EpjDfOhp281OmddUCe-OZLyqAP74PGaYA_PbnjY_Okfk6-noDWT9l3KotCkrScpPJ0QNQOBFc0YFXimbGn0vl6hQ6O8taFRiU8llVys",
            "https:\/\/lh3.googleusercontent.com/gps-cs-s/AHVAweo1k-xeGmGCST4s6RxlJFQp15RI9J8RPJVR0cV2zjwL6A_yVlkvuJdCUk79mmHxRuBjVACxfQ9UsslB3QlUxPXmNmhv1UIq6wCTrxFT_K8MvVO-MxGOERF-0maTRfOT2GMlDyeW"
        ],
        "Place Id": "0x2e7a59c2d7a2d0cd:0x5823ba5aec88d3d4",
        "Top 5 Reviews": [
            {
                "name": "Sani Nadziroh",
                "review": "Menu sayur lauk nya lengkap bgt, prasmanan ambil sendiri, ada nasi merah nya jg.. hrg sesuai kantong mahasiswa, parkir motor aja, mobil agak susah"
            },
            {
                "name": "Faris",
                "review": "Harganya masih murah. Nasi telur 8K, Mie Rebus telur 8K, Nasi Ayam 10k."
            },
            {
                "name": "MellFie",
                "review": "Utk  makanannya ya lumayan oke standart masakan rumahan... Yg perlu di evaluasi kedepan adl ketika saat BAYAR, Catatan OWNER Tolong di sediakan Beri NOTA/Struk ke konsumen, Agar yg mau beli tidak kecewa karena Sering kejadian bbrp x beli \u2026"
            }
        ],
        "description": "A highly affordable, buffet-style Javanese eatery offering a wide variety of home-cooked dishes, making it a favorite among students. While the food and value are excellent, some customers suggest the management provide clear receipts to prevent billing confusion."
    },
    {
        "Name": "Rumah Makan Flamboyan",
        "Fulladdress": "Jalan Flamboyan CTX No.39 Karang Asam Baru, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        "Street": "Jalan Flamboyan CTX No.39 Karang Asam Baru",
        "Categories": "Restoran Jawa",
        "Phone": "0812-2943-875",
        "Review Count": null,
        "Average Rating": "4,5",
        "Google Maps URL": "https://www.google.com/maps/place/Rumah+Makan+Flamboyan/data=!4m7!3m6!1s0x2e7a59b07a52d42f:0xa51751981858b85!8m2!3d-7.7661279!4d110.3900084!16s%2Fg%2F11b636s0n9!19sChIJL9RSerBZei4RhYuFgRl1UQo?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7661279,
        "Longitude": 110.3900084,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepQxLXc684szr6bNTKoSPYrBwZ8vQYoGj1gdqOyc-FApBr7x2oxNkRUw_Li2gQo2GAVdWS5GdXt5wN1TQbmzUGRdLZNA4D3PX7YCMfWUu0v9fGPIc42J1HPwXAwMuTkR1ZW3ING5Fc2jH0",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjUYWf1CzL4e2MuTTv1gY-5sP30-9ilx2IPAsETXdGKG_DwYamE",
            "https://lh3.googleusercontent.com/a-/ALV-UjWvPPjZTRtywF0vwdls8F_RQOUlX8pJ4GG2lu1Gr31n5ugkZX8v"
        ],
        "Place Id": "0x2e7a59b07a52d42f:0xa51751981858b85",
        "Top 5 Reviews": [
            {
                "name": "Fadly Kurniadi",
                "review": "Kaget dikit. ENAK RASANYA. Opsi makanan-makanan rumahan yang rasanya ga perlu diraguin. Ini salah satu prasmanan terenak di Jogja. \u2026"
            },
            {
                "name": "Siti Nur ' Aisyah",
                "review": "sahur disini worth it banget. selain enak, banyak pilihan makanannya dan sayurnya pun masih hangat. setiap kesini selalu ramai karena harganya standar juga. kalau mau sahur disini sih sebisanya datang jam 2 pas. karna lewat dikit aja sudah banyak orang yang berdatangan. kadang sampe ga dapat tempat makan dan tempat parkir mobil."
            },
            {
                "name": "Dede Putra",
                "review": "Karena dekat kos jadi sering makan siang disini, bingung cara hitung harga nasinya bagaimana. Ini ambil lebih dikit dari biasanya dihitung 5000, rata2 biasanya 4500. Pernah juga dihitung 6000 cuma waktu itu blm terlalu memperhatikan. Harga makanan yang di foto 11.500 (budget mahasiwa)."
            }
        ],
        "description": "Regarded as one of the best and most popular buffet (prasmanan) spots in Jogja, offering delicious, warm home-style cooking. It is especially famous as a highly affordable destination for late-night meals or Sahur, though the pricing calculation can sometimes confuse patrons."
    },
    {
        "Name": "Pecel Senggol Beringharjo",
        "Fulladdress": "Ps. Beringharjo, Jl. Pabringan No.84, Ngupasan, Gondomanan, Yogyakarta City, Special Region of Yogyakarta 55122",
        "Street": "Ps. Beringharjo",
        "Categories": "Restoran Pecel Lele",
        "Phone": null,
        "Review Count": null,
        "Average Rating": "4,6",
        "Google Maps URL": "https://www.google.com/maps/place/Pecel+Senggol+Beringharjo/data=!4m7!3m6!1s0x2e7a578648130f75:0xabc121cc4140c0fb!8m2!3d-7.7987462!4d110.3644316!16s%2Fg%2F11css6zyrj!19sChIJdQ8TSIZXei4R-8BAQcwhwas?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7987462,
        "Longitude": 110.3644316,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepjwG_klrx05c1N48J7mi465nertLMAFVXukZLOSqp5pRlS4IKd_1Xz4_73095G-66lUtaad_KoL2VMMuwQ1jpNdiVNFDJB68zXYIAZ7CyCNC9CSNL90WhMFy0wxb_9itO_V9c9Vw",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerFrvKf1Fjw0O1ijwBrr0-skuFX4Dl7ofwqMX57R-d7FFYmW6fXeRN_ViDQO4Fv15G1colHvD7Zny7u483f-4AUh3J3wO9tbwyFn0ElcflhGU1_u5EpRujBCPu_Q8onslaeJ1kGO4cuVLgK",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqplHIDJ7hWnCyCX2az6IkzsoOvKq41YQVJ_aQuBfGvXckeo-IcxvrapTQHKLWWxJ63FgRRmR_70MSpWr6fM5bNxYChacrv-aQIwx7mDwq9DyPgZxgTs8jf8gk3H6FlDme71zVi19e2WFv6"
        ],
        "Place Id": "0x2e7a578648130f75:0xabc121cc4140c0fb",
        "Top 5 Reviews": [
            {
                "name": "FAJAR Htt",
                "review": "Makanan enak, di luar area Malioboro harga segini dapat porsi buto, ini setengahnya, porsi cewek diet. Peyek biasane include tapi di sini termasuk kondimen topping. \u2026"
            },
            {
                "name": "Muhammad Fajar Zulfikar",
                "review": "Salah satu tempat belanja pilihan Terbaik di Malioboro, banyak aneka pilihan barang yang ingin kalian cari dengan gedung pasar 4 lantai (lantai bawah basement) dan tentunya bisa kulineran juga"
            },
            {
                "name": "veronica cg",
                "review": "Lagi jalan2 di Malioboro kelaperan dan memutuskan ke Teras Malioboro 1  Kondisi hari Jumat siang saat long weekend libur Idul Adha sungguh sepi, semua \u2026"
            }
        ],
        "description": "Located near the bustling Malioboro area, this spot offers tasty traditional pecel. While convenient for shoppers, some diners note that the portion sizes are relatively small compared to non-tourist areas."
    },
    {
        "Name": "SMARA Restaurant",
        "Fulladdress": "Jl. Laksda Adisucipto No.82, Ambarukmo, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        "Street": "Jl. Laksda Adisucipto No.82",
        "Categories": "Restoran",
        "Phone": "(0274) 2800088",
        "Review Count": null,
        "Average Rating": "4,8",
        "Google Maps URL": "https://www.google.com/maps/place/SMARA+Restaurant/data=!4m7!3m6!1s0x2e7a59c2c62247ab:0xfc335694ea642410!8m2!3d-7.7835759!4d110.4005489!16s%2Fg%2F11dfp8cp09!19sChIJq0cixsJZei4RECRk6pRWM_w?authuser=0&hl=id&rclk=1",
        "Latitude": -7.7835759,
        "Longitude": 110.4005489,
        "Website": "http://grammhotel.com/",
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepCNwHnzWpyorYXyiF1OMQ1taynEmv4pKcT7fA3O6n-tDt9PKJiV0GW5ZUmyWwvUhROeOKDxhXILsZQjQJICHEKPgXmMgGbfNeSy-IF3p5vrV77vTxwUYpxvFoGNYz7tyevH4w",
        "Additional Images": [
            "https://lh3.googleusercontent.com/a-/ALV-UjWXMgSzuTIQvFUv5C2RDMN5KMQXPYXuBPez_KsJrctA9mFjfzzVWQ",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep13trn_vdqXU7CuGpgtwAewhN7qGkfS5rDvhNOPxWmKhhBOJVHO6aL_Hld_MQfPrsj3_Ttj2kYEtJRUIyLp6N-gCwoyxuLl0_-3rRedCmgpNir1vnv8Dx9HM_2_8Wd5Cz7RP1UZQ"
        ],
        "Place Id": "0x2e7a59c2c62247ab:0xfc335694ea642410",
        "Top 5 Reviews": [
            {
                "name": "Efi Kurniyawati",
                "review": "Lokasi: Berada di dalam gramm hotel  Interiornya: Instagramable \u2026"
            },
            {
                "name": "Dea Putri",
                "review": "Pertama kali datang kesini pelayanan mulai scurity, FO bagus sekali, checkin tidak mematok jam 2 ternyata, ketika kamar ready kami lgsg boleh masuk. Untuk makanan bervariasi, rasanya enak.. kolam renang bersih, mau k mall akses \u2026"
            },
            {
                "name": "Asep Hermawan",
                "review": "Makanannya sangat memuaskan dan beraneka macam dan servicenya memuaskan dan mba salwa pelayananya sangat bagus dan ramah hotelnya juga sangat bagus"
            }
        ],
        "description": "Located within the Gramm Hotel, SMARA Restaurant offers a highly Instagramable interior combined with top-tier hospitality. Guests highly commend the wide variety of delicious food and the exceptionally attentive, friendly service."
    },
    {
        "Name": "Ayam Goreng Co-De",
        "Fulladdress": "Jl. Jagalan - Beji No.19, Purwokinanti, Pakualaman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55112",
        "Street": "Jl. Jagalan - Beji No.19",
        "Categories": "Restoran",
        "Phone": "(0274) 549947",
        "Review Count": null,
        "Average Rating": "4,4",
        "Google Maps URL": "https://www.google.com/maps/place/Ayam+Goreng+Co-De/data=!4m7!3m6!1s0x2e7a5786bdf48ed5:0xdd6c3f83a4cbcc1b!8m2!3d-7.8000433!4d110.370962!16s%2Fg%2F1hm3sdkbp!19sChIJ1Y70vYZXei4RG8zLpIM_bN0?authuser=0&hl=id&rclk=1",
        "Latitude": -7.8000433,
        "Longitude": 110.370962,
        "Website": null,
        "Main Image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepBKtQfci-SnXCmjveOw1mMHz0ZPYNw1Pxc4GtHlPBzekGTkLVBiQUKuXTkQMXY3-93MmIbAYegriRcPszdOTUHljfVcfk_rzw-N3Q3aC6lhr3NcP4aic7rNk_X99f9ZgVMm6IWyQ",
        "Additional Images": [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqI6sKpadENnE1bM-YLWl0c8xzdiomhe60CSq0QKQs9QZVYgjcXck1MmKEulDj6Z57Q26tmjUmAiqIw33SXtr7P00I95EQ8rLvpNm7K3sJnLL2N95uWzk0i_97X-wNJ3Hv6EPOY",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepyFDnE43WZ9h46xarp3oY_KpWXamZSOM5KYKeUVz57Wlb1bMKYzU0CiYf5CEdeeV-eCIWAP9uU7s38LstmWHKz_4ZAQsr1rms7EuRYFS08Msw28qX5KFlVfOHZgAO3MCa5Zj5l3m3mNuM"
        ],
        "Place Id": "0x2e7a5786bdf48ed5:0xdd6c3f83a4cbcc1b",
        "Top 5 Reviews": [
            {
                "name": "Arland Arlandria",
                "review": "Saya sebenarnya suka dengan Ayam Code dan baru kali ini makan di tempat bersama istri. Tetapi setelah sampai rumah dan mengecek nota, saya menemukan adanya kesalahan yang cukup mengganggu. Di dalam nota tercantum pesanan kepala ayam yang \u2026"
            },
            {
                "name": "Reborn_54",
                "review": "Salah satu warung ayam ampela ati goreng legend di Jogja dengan rasa yang khas beda \u2026"
            },
            {
                "name": "YN Alvana",
                "review": "Jagalan Beji merupakan sentra ayam goreng Jogja yang sudah melegenda sejak puluhan tahun. Ayam Goreng Co-De menjadi salah satu ayam legendaris itu. Ayam ini mungkin lebih dikenal masyarakat ketika menjadi hantaran namun cobalah sesekali \u2026"
            }
        ],
        "description": "A legendary fried chicken establishment in the Jagalan area, well-known for its uniquely flavored chicken and giblets. While it is a beloved staple often used for traditional food gifts (hantaran), some dine-in customers have advised double-checking the bill for accuracy."
    }
]

export default restaurant;